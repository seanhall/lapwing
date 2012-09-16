/**
 * Module dependencies.
 */

var express = require('express')
    , app = module.exports = express.createServer()
    , fs = require('fs')
    ;

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
	res.render('index.jade');
});

app.get('/compile', function(req,res){
	var COMPILER_JAR = 'plovr.jar';
	var _exec = require('child_process').exec;
	function compile(srcPath, distPath) {
	    _exec(
	      'java -jar '+ COMPILER_JAR +' build '+ srcPath,
	      function (error, stdout, stderr) {
	        if (error) {
	          res.render('error.jade', {
	          	locals: { error: error, output: stderr }
	          });
	        } 
	        else {
	          res.render('done.jade');
	        }
	      }
	    );
	}
	compile('config/prod.js config/dev.js');
});

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});