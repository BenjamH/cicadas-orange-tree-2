/* Write your JS to modify the view here */
$(function(){


plantTree();
age = 0;
fruitCount = 0;
FRUIT_BEARING_AGE = 10;
ageTree();
pickOrange();

});




var plantTree = function(){
    $('.plant').on('click', function(event){
    event.preventDefault();
    $('#orange-tree-template').show();
    $('.plant').attr('disabled', 'disabled');
    })
}

var ageTree = function(){
  $('button.age').on('click', function(event){
    event.preventDefault();
    age += 1;
    $('p.age').text(age);
    if (age >= FRUIT_BEARING_AGE){
      var randomNumber = Math.floor((Math.random() * 10) + 1);
      fruitCount += randomNumber;
      $('p.fruit-count').text(fruitCount);
      var i = 0
      while (i < randomNumber){
      $('#orange-tree-template').append('<div id="orange"></div>');
      i++;
    }
    }
  })
}

var pickOrange = function(){
  $('button.pick').on('click', function(event){
    event.preventDefault();
    if (fruitCount > 0){
    fruitCount -= 1;
    $('p.fruit-count').text(fruitCount);
    $('#orange').first().remove();
    }
    else {
      $('button.pick').attr('disabled', 'disabled')
    }
  })
}