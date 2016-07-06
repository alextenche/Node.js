var printMessage = function(message){
  console.log('Message: ' + message);
};

var printWithDateMessage = function(message){
  console.log(new Date().toUTCString() + ' - Message: ' + message);
};

exports.printMessage = printMessage;
exports.printWithDateMessage = printWithDateMessage;
