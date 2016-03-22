var gulp = require('gulp');
var change = require('gulp-change');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var templateCache = require('gulp-templatecache');
var path = require('path');
var child_process = require('child_process');
var q = require('q');
var protractor = require("gulp-protractor").protractor;
// Download and update the selenium driver
var webdriver_update = require('gulp-protractor').webdriver_update;
var webdriver_standalone = require('gulp-protractor').webdriver_standalone;
var minimist = require('minimist');
var Xvfb = require('xvfb');

var gutil = require('gulp-util');

var options = minimist(process.argv.slice(2));

options.debug=(options.debug=='true')

if (options.isvagrant==undefined)
	options.isvagrant=(process.env.USER=='vagrant')?true:false;
else
	options.isvagrant=(options.isvagrant=='true')

if (options.env==undefined)
	options.env=process.env.ENV || 'development';

if (options.host==undefined)
	options.host=process.env.HOST || 'http://127.0.0.1:5000';

if (options.static_dir==undefined)
	options.static_dir=process.env.STATIC_DIR || 'dist/';

if (options.theme==undefined)
	options.theme=process.env.THEME || 'default';

var config = require('./src/theme/'+options.theme+'/config.json');

// Downloads the selenium webdriver
gulp.task('webdriver_update', webdriver_update);

// Runs the selenium webdriver
gulp.task('webdriver_standalone', webdriver_standalone);

//clear temp folder
gulp.task('clear', function () {
  return gulp.src('src/temp').pipe(clean())
});

//compile sass
gulp.task('scss', function () {
  return gulp.src(config.scss.source.map(optionsChange))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/temp/css'));
});

//compile less
gulp.task('less', function () {
  return gulp.src(config.less.source.map(optionsChange))
    .pipe(less({
      paths: config.less.paths.map(optionsChange).map(function(folder){
        return path.join(__dirname, folder);
      })
    })
    .on('error', console.log))
    .pipe(gulp.dest('./src/temp/css'));
});

//build css
gulp.task('build:css', function () {
  var source=config.css.source.map(optionsChange);
  if (options.env=='production')
	  return gulp.src(source)
		.pipe(sourcemaps.init({loadMaps:true}))
		.pipe(minifyCSS({compatibility: 'ie8'}))
		.pipe(change(sourceChange))
		.pipe(concat(options.static_dir+'app.css'))
		.pipe(sourcemaps.write({addComment: false}))
		.pipe(gulp.dest('.'));
  else
	  return gulp.src(source)
		.pipe(change(sourceChange))
		.pipe(concat(options.static_dir+'app.css'))
		.pipe(gulp.dest('.'));
});

//concat templates js
gulp.task('template:js', function () {
  return gulp.src(config.template.source.map(optionsChange))
    .pipe(templateCache({
      output: 'src/temp/js/templates.js',
      moduleName: 'app',
      strip: optionsChange(config.template.strip),
      prepend: 'views/',
    }))
    .pipe(gulp.dest('./'))
});

//build js
gulp.task('build:js', function () {
  var source=config.js.source.map(optionsChange);
  if (options.env=='production')
	  return gulp.src(source)
		.pipe(sourcemaps.init())
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(change(sourceChange))
		.pipe(concat(options.static_dir+'app.js'))
		.pipe(sourcemaps.write({addComment: false}))
		.pipe(gulp.dest('.'));
  else
	  return gulp.src(source)
		.pipe(sourcemaps.init())
		.pipe(change(sourceChange))
		.pipe(concat(options.static_dir+'app.js'))
		.pipe(sourcemaps.write({addComment: false}))
		.pipe(gulp.dest('.'));
});

//build
gulp.task('build', gulp.series('clear','template:js','scss','less','build:css',
              'build:js'));

// Tests
gulp.task('test', function (done) {
    var source=config.test.source.map(optionsChange);
    if (options['_']=='test' && options.file!==undefined)
        source=config.test.source_custom.map(optionsChange);

	if (options.isvagrant){
		var xvfb = new Xvfb({displayNum:10, timeout: 15000, silent: true});
		xvfb.start(function(err, xvfbProcess) {
			var stream = gulp.src(source)
			.pipe(protractor({
				configFile: "protractor.config.js",
				args: ['--baseUrl', options.host, '--params.debugAll', options.debug]
			}));
			stream.on('end', function() {
				xvfb.stop(function() {
					done();
				});
			});
			stream.on('error', function(err) {
				xvfb.stop(function() {
					done(err);
				});
			});
		});
	}else{
		var stream = gulp.src(source)
		.pipe(protractor({
			configFile: "protractor.config.js",
			args: ['--baseUrl', options.host, '--params.debugAll', options.debug]
		}));
		stream.on('end', function() {
			done();
		});
		stream.on('error', function(err) {
			done(err);
		});
	}
});

// Run build
gulp.task('scripts:build', function (done) {
    var export_cat_env='export $(cat .env)';
    if (process.env.ENV)
        export_cat_env=false;
    spawnRunner(
        'BUILD',
        ['cd ../', export_cat_env, 'bash scripts/build.sh', 'echo stop_spawn'],
        function(data, isError){
            var buildSpawn=this;
            if (isError || data.indexOf('stop_spawn')!=-1)
                buildSpawn.killMe(function(err){
                    if (isError)
                        done(data);
                    else
                        done(0);
                });
        },
        done
    );
});

// Run server
gulp.task('scripts:server', function (done) {
    var export_cat_env='export $(cat .env)';
    if (process.env.ENV)
        export_cat_env=false;
    spawnRunner(
        'SERVER',
        ['cd ../', export_cat_env, 'bash scripts/server.sh'],
        function(data, isError){
        },
        done
    );
});

// Tests with run server
gulp.task('scripts:test', function (done) {
    var export_cat_env='export $(cat .env)';
    if (process.env.ENV)
        export_cat_env=false;
    spawnRunner(
        'SERVER',
        ['cd ../', export_cat_env, 'bash scripts/server.sh'],
        function(data, isError){
            if (this.testSpawn===undefined){
                this.testSpawn=true;

                var serverSpawn=this;

                setTimeout(function(){
                    if (serverSpawn.killed!==true)
                        serverSpawn.testSpawn=spawnRunner(
                            'TEST',
                            ['cd ../', export_cat_env, 'bash scripts/test.sh'],
                            function(data, isError){
                                var testSpawn=this;

                                if (data.indexOf('Finished \'test\' after')!=-1 || isError){
                                    serverSpawn.showLog=isError;

                                    testSpawn.killMe(function(err){
                                        serverSpawn.killMe(function(){
                                            if (isError)
                                                done(data);
                                            else
                                                done(0);
                                        });
                                    });
                                }
                            },
                            done
                        );
                }, 10000);

            }
        },
        done
    );
});

function spawnRunner(title, shell, callback, processExitHandler, logHandler){
    var child = child_process.spawn('bash', {detached: true}),
        prevData = '';

    child.showLog=true;

    if (logHandler==undefined)
        logHandler=function (data, isError){
            if (this.showLog){
                if (isError===true){
                    gutil.log('['+title+']',gutil.colors.red(data));
                    gutil.beep();
                }else{
                    gutil.log('['+title+']',gutil.colors.blue(data));
                }
            }
        }

    if (callback==undefined)
        callback=function(){
            logHandler.call(child, 'empty callback', false);
        }

    logHandler.call(child, 'start', false);

    for (var i=0;i<shell.length;i++)
        if (shell[i]!==false)
            child.stdin.write(shell[i]+'\n');

    child.stdout.setEncoding('utf8');

    child.stdout.on('data', function (data) {
        if (prevData!=data){
            prevData = data;
            logHandler.call(child, data, false);
            if (child.killed!==true)
                callback.call(child, data, false);
        }
    });

    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function (data) {
        if (prevData!=data){
            prevData = data;
            logHandler.call(child, data, true);
            if (child.killed!==true)
                callback.call(child, data, true);
        }
    });

    var killMeCallback=function(code){

    };

    child.on('close', function(code) {
        logHandler.call(child, 'Close with exit code:'+ code, false);
        killMeCallback(code);
        if (processExitHandler!=undefined)
            processExitHandler();
        child.killed=true;
    });

    child.killMe=function(callback){
        if (callback!=undefined)
            killMeCallback=callback;

        process.kill(-child.pid);
    }

    //catches ctrl+c event
    process.on('SIGINT', child.killMe.bind());

    return child;
}

//change by options
function optionsChange(src){
    for (var key in options)
        src=src.replace(new RegExp("%"+key, "g"), options[key])
    return src;
}

//source modifi function
function sourceChange(content) {
    for (var key in config.sourceChange)
        content=content.replace(new RegExp(key, "ig"), config.sourceChange[key])
    return content;
}