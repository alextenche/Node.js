var fs = require("fs");
var yaml = require("js-yaml");
var path =  require("path");

// var profile = yaml.safeLoad(fs.readFileSync("./profile.yml", "utf8"));
// console.log(profile.name);
// var message = profile.name + " is " + profile.age + " years old and likes ";
// message += profile.movies.join(" and ") + ".";
//
// fs.writeFileSync(path.join(".","save", "alex.txt"), message, "utf8");

fs.readFile("./profile.yml", "utf8", function(err, file){
  if(err){
    console.error(err);
    return;
  }
  var profile = yaml.safeLoad(file);
  var message = profile.name + " is " + profile.age + " years old and likes ";
  message += profile.movies.join(" and ") + ".";
  var filePath = path.join(".","save", "alex.txt");
  fs.writeFile(filePath, message, "utf8", function(err){
    if(err){
      console.error(err);
      return;
    }
    console.log("file saved");
  });
});
