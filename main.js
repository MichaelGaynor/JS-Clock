// $('.myList li').addClass('item');

// var para = $('.text');
// para.html('<span>Hello how are you?</span>')


// var button = $('.myButton');
// var box = $('.box');

// button.on('mouseover', function(){
//   $(this).fadeout();
//   box.addClass('green');
// });

// button.on('mouseleave', function(){
//   box.fadeOut();
// });

$('body').css('background-color', '#272822');

function updateClock() {

var today = new Date();
var thisHour = today.getHours();
var thisMinute = today.getMinutes();
var thisSecond = today.getSeconds();

thisHour = (thisHour > 12) ? thisHour - 12 : thisHour;
thisHour = (thisHour === 0) ? 12: thisHour;
thisMinute = (thisMinute < 10 ? '0' : '') + thisMinute;
thisSecond = (thisSecond < 10 ? '0' : '') + thisSecond;
thisHour = (thisHour < 10 ? '0' : '') + thisHour;


var thisTimeString = '#'+thisHour+thisMinute+thisSecond;

$('.clock').html(thisTimeString);
}

$(document).ready(function(){
  setInterval('updateClock()', 1000);
})
$(document).ready(function(){
  setInterval('',1000)
})

