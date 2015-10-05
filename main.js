$('.myList li').addClass('item');

var para = $('.text');
para.html('<span>Hello how are you?</span>')


var button = $('.myButton');
var box = $('.box');

button.on('mouseover', function(){
  $(this).fadeout();
  box.addClass('green');
});

button.on('mouseleave', function(){
  box.fadeOut();
});