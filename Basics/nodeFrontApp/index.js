var powerUp = require("./lib/powerUp");

var randomList = [22, 45.3, 234, 120, 55, 0.444];
var pow10 = powerUp(10);

var transformed = randomList.map(pow10);
console.log(transformed);
