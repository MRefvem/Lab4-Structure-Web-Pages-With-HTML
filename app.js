'use strict'

function getNameAge (){
var userName = prompt('What is your name?')
var userAge = prompt('What is your age?')

document.write('<h3>' + userName + '</h3>');
}

'use strict'

function getTimeOfDay (){
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
}

function getDogPreference (){
var txt;
var r = confirm("Do you like Dogs?");
if (r == true) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}
}

getNameAge ();
getTimeOfDay ();
getDogPreference ();