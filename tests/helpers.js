module.exports ={
  debug: false,
  debugAll: false,
  inDebug:function(){
    return this.debugAll==true || browser.params.debugAll=='true';
  },
  executeAndReturnJson: function (code, callback){
        if (this.inDebug())
            this.debug=true;
        code =
            "function getCookie(name) {\n"+
            "var cookieValue = null;\n"+
            "if (document.cookie && document.cookie != '') {\n"+
            "    var cookies = document.cookie.split(';');\n"+
            "    for (var i = 0; i < cookies.length; i++) {\n"+
            "        var cookie = jQuery.trim(cookies[i]);\n"+
            "        if (cookie.substring(0, name.length + 1) == (name + '=')) {\n"+
            "            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));\n"+
            "            break;\n"+
            "        }\n"+
            "    }\n"+
            "}\n"+
            "return cookieValue;\n"+
            "}\n"+
            'var callbackArg = arguments[arguments.length - 1];\n' +
            'var callback = function(data){callbackArg(JSON.stringify(data));};\n' + code;
        browser.driver.executeAsyncScript(code).then(function(data){
            callback(JSON.parse(data));
        });
  },
  getJson: function(uri, callback){
    if (this.inDebug())
        this.debug=true;
    var $this=this;
    this.executeAndReturnJson(
        '$.get( "'+uri+'")'+
        '.done(function(){callback.apply(this, arguments)})'+
        '.fail(function(){callback.apply(this, arguments)});',
        function(){
                if ($this.debug===true){
                    console.log('\nGET: '+uri);
                    console.log('RESPONSE:');
                    if (arguments[0]!=undefined)
                        console.log(arguments[0]);
                    else
                        console.log(arguments);
                    console.log('\n');
                    $this.debug=false;
                }
                callback.apply(this, arguments);
        }
    )
  },
  postJson: function(uri, data, callback){
    if (this.inDebug())
        this.debug=true;
    var $this=this;
    this.executeAndReturnJson(
        'var postData='+JSON.stringify(data)+';'+
        '$.ajaxSetup({headers:{"X-CSRFToken":getCookie("csrftoken")}});'+
        '$.ajax({'+
        '    type: "POST",'+
        '    url: "'+uri+'",'+
        '    contentType: "application/json",'+
        '    dataType: "json",'+
        '    data: JSON.stringify(postData)'+
        '})'+
        '.done(function(){callback.apply(this, arguments)})'+
        '.fail(function(){callback.apply(this, arguments)});',
        function(){
                if ($this.debug===true){
                    console.log('\nPOST: '+uri);
                    console.log('DATA:');
                    console.log(data);
                    console.log('RESPONSE:');
                    if (arguments[0]!=undefined)
                        console.log(arguments[0]);
                    else
                        console.log(arguments);
                    console.log('\n');
                    $this.debug=false;
                }
                callback.apply(this, arguments)
        }
    )
  },
  checkMail:function(processHandler, callback){
    if (this.inDebug())
        this.debug=true;
    var Imap = require('imap');
    //var inspect = require('util').inspect;
    var MailParser = require("mailparser").MailParser;

    var imap = new Imap({
      user: process.env.EMAIL_HOST_USER,
      password: process.env.EMAIL_HOST_PASSWORD,
      host: process.env.EMAIL_IMAP_HOST,
      port: process.env.EMAIL_IMAP_PORT,
      tls: process.env.EMAIL_IMAP_USE_TLS==1
    });

    function openInbox(cb) {
      imap.openBox('INBOX', true, cb);
    }

    imap.once('ready', function() {

        openInbox(function(err, box) {
          if (err) throw err;
          imap.search([ 'UNSEEN', ['SINCE', (new Date(new Date()-6*60*60*1000)) ] ], function(err, results) {
            if (err) throw err;
            var f = imap.fetch(results, { bodies: '' });
            f.on('message', function(msg, seqno) {
              if ($this.debug===true)
                console.log('Message #%d', seqno);
              var prefix = '(#' + seqno + ') ';
              msg.on('body', function(stream, info) {
                if ($this.debug===true)
                    console.log(prefix + 'Body');

                var mailparser = new MailParser();

                mailparser.on("end", processHandler);

                stream.pipe(mailparser);

              });
              msg.once('attributes', function(attrs) {
                  if ($this.debug===true)
                    console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
              });
              msg.once('end', function() {
                  if ($this.debug===true)
                    console.log(prefix + 'Finished');
              });
            });
            f.once('error', function(err) {
              if ($this.debug===true)
                console.log('Fetch error: ' + err);
            });
            f.once('end', function() {
              if ($this.debug===true)
                console.log('Done fetching all messages!');
              imap.end();
            });
          });
        });
    });

    imap.once('error', function(err) {
      if ($this.debug===true)
        console.log(err);
      callback(err);
    });

    imap.once('end', function() {
      if ($this.debug===true)
        console.log('Connection ended');
      callback();
    });

    imap.connect();
  }
}