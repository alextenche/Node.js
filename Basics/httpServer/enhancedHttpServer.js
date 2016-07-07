var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

var server = http.createServer(function onRequest(req, res){
  var urlParts = url.parse(req.url);
  var doc = './docs' + urlParts.pathname;

  fs.access(doc, function fileExists(exists){
    if(exists){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      fs.createReadStream(doc).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Not found\n');
    }
  });
}).listen(3000);
