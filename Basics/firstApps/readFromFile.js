var fs = require('fs');

fs.readFile('writeToConsole.js', 'utf-8', function OnFileRead(err, data){
  if(err){
    throw err;
  }
  console.log('file content is: ');
  console.log(content);
});
