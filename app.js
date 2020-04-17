'use strict'

var userName = prompt('What is your name?')
var userAge = prompt('What is your age?')

document.write('<h3>' + 'Hello ' + userName + '</h3>');

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

function theDogTest (){
  var isTrueDogFan = '';

  while ((isTrueDogFan != 'YES') && (isTrueDogFan != 'NO')) {
    isTrueDogFan = prompt('Are you a true dog fan? (yes or no)').toUpperCase();
  }

  if(isTrueDogFan === 'NO')
    var wannaLearn = prompt('Want to learn about how awesome dogs are?').toUpperCase();

    if (isTrueDogFan === 'YES'){
      alert('Welcome Dog Fan ' + userName);
      document.write('<h1>' + userName + 'Welcome to the Best Dog Club!' + '<h1>');
    }

    else if (wannaLearn === 'no');
      alert('This site is for Dog Fans only!!!');
} 


function numberGuessingGame (){
  var correctAnswer = 32
  for(var i = 0; i < 4; i = i + 1){
    var numberGuess = prompt('Please guess a number between 1 and 50 to find out if you have the potential to be a dog person. You get four tries!')
    if (numberGuess == correctAnswer) {
      alert('Correct! Welcome to Dog Zone!');
      break;
    } else {
      alert('Sorry, please try again!')
    }
    if (i == '3') {
      alert('Sorry! You might actually be more of a cat person.')
    }
  }
}

getTimeOfDay ();
getDogPreference ();
theDogTest ();
numberGuessingGame ();