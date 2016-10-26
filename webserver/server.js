'use strict';

var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

var mimeTypes = {
  'html': 'text/html',
  'jpeg': 'image/jpeg',
  'jpg': 'image/jpeg',
  'png': 'image/png',
  'js': 'text/javascript',
  'css': 'text/css'
};

http.createServer(function(req, res){
  var uri = url.parse(req.url).pathname;
  var filename = path.join(process.cwd(), unescape(uri));

  console.log('loading ' +  uri);

  var stats;

  try {
    stats = fs.lstatSync(filename);
  } catch {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('404 Not Found\n');
    res.end();
    return;
  }

  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.end('working server\n');
}).listen(1337, '127.0.0.1');

console.log('server running at http://127.0.0.1:1337/');
