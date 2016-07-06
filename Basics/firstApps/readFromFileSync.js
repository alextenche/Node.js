var fs = require('fs');

var content = fs.readFileSync('writeToConsole.js', 'utf-8');

console.log('file content is: ');
console.log(content);
