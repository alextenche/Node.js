"use strict";

var heroes = ["Blade", "Snake", "Superman"];
var numbers = [1, 1, 2, 3, 5, 7, 13];
var person = {
  name: "Jack Reacher",
  occupation: "Tom Cruize",
  likes: ["fight", "investigations"]
};

// forEach
heroes.forEach(function(hero, index){
  console.log(index + ":" + hero);
});

// array map`
var numbers100 = numbers.map(function(n){
  return n * 100;
});
console.log(numbers100);

// check if array
console.log(Array.isArray(heroes));
console.log(Array.isArray(person));

//
console.log(Object.keys(person));

Object.keys(person).forEach(function(key){
  console.log(key);
  console.log(person[key]);
});

// console
console.log("Info");
console.dir({key: "value"});
console.error("error");

// global
var team = "Poli Timisoara";
global.team = "Politehnica Timisoara";

// another file
console.log(team);          // undefined
console.log(global.team);   // Politehnica Timisoara

// process
console.log(process.argv);

// __filename
console.log(__filename);

// __dirname
console.log(__dirname);
