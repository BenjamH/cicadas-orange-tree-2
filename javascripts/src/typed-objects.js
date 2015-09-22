// // Write your Orange Tree code here - you may use constructor functions

var Orange = function(){
  var randomNumber = Math.floor((Math.random() * 10) + 1);
  this.diameter = randomNumber;
}

var Tree = function(){
  this.oranges = [];
  var FRUIT_BEARING_AGE = 10;
  var MAX_AGE = 60;
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.isAlive = true;
}

Tree.prototype.grow = function(){
  this.age += 1;
  this.height += 10;
  if (this.age >= FRUIT_BEARING_AGE){
    this.addOranges();
  }
  if (this.age > MAX_AGE){
    this.die();
  }
}

Tree.prototype.addOranges = function(){
var randomNumber = Math.floor((Math.random() * 10) + 1);
var i = 0;
while (i<randomNumber){
  this.oranges.push(new Orange());
  i++;
  };
  this.orangeCount = this.oranges.length;
};

Tree.prototype.die = function(){
  this.isAlive = false;
}

Tree.prototype.dropOrange = function(){
  return this.pickOrange();
}

Tree.prototype.pickOrange = function(){
  var orange = this.oranges.pop();
  this.orangeCount = this.oranges.length;
  return orange;
}

// FRUIT_BEARING_AGE = 10;
// MAX_AGE = 60;

// var createTree = function(){
//   var tree = {
//     age: 0,
//     height: 0,
//     orangeCount: 0,
//     grow: function(){
//       this.age += 1;
//       this.height += 10;
//       if (this.age >= FRUIT_BEARING_AGE){
//         this.orangeCount += Math.floor((Math.random() * 10) + 1);
//         };
//       if (this.age > MAX_AGE){
//         this.isAlive = false;
//         };
//     },
//     isAlive: true,
//     dropOrange: function(){
//       this.orangeCount -= 1;
//       var orange = {};
//       return orange
//     },
//   }
//   return tree;
// }


// function pickOrange(){
//   var orange = {
//     diameter: 1
//   }
//   return orange;
// }