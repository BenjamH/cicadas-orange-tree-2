/* Write your code for the plain-old-js-objects-spec here */
FRUIT_BEARING_AGE = 10;
MAX_AGE = 60;

var createTree = function(){
  var tree = {
    age: 0,
    height: 0,
    orangeCount: 0,
    grow: function(){
      this.age += 1;
      this.height += 10;
      if (this.age >= FRUIT_BEARING_AGE){
        this.orangeCount += Math.floor((Math.random() * 10) + 1);
        };
      if (this.age > MAX_AGE){
        this.isAlive = false;
        };
    },
    isAlive: true,
    dropOrange: function(){
      this.orangeCount -= 1;
      var orange = {};
      return orange
    },
  }
  return tree;
}


function pickOrange(){
  var orange = {
    diameter: 1
  }
  return orange;
}