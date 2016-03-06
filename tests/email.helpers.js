module.exports ={
  debug: false,
  debugAll: false,
  inDebug:function(){
    return this.debugAll==true || browser.params.debugAll=='true';
  },
  checkMail:function(processHandler, callback){
    if (this.inDebug())
        this.debug=true;
    var $this=this;
    var Imap = require('imap');
    var inspect = require('util').inspect;
    var MailParser = require("mailparser").MailParser;

    var imap = new Imap({
      user: process.env.EMAIL_HOST_USER.replace(/\r$/, ''),
      password: process.env.EMAIL_HOST_PASSWORD.replace(/\r$/, ''),
      host: process.env.EMAIL_IMAP_HOST.replace(/\r$/, ''),
      port: process.env.EMAIL_IMAP_PORT.replace(/\r$/, ''),
      tls: process.env.EMAIL_IMAP_USE_TLS.replace(/\r$/, '')==1
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
