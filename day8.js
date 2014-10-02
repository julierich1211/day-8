//**
 //* 1. create a new repo on Github called TIY-hw08 (08 for the day,
 //* 2. add this script file to your index.html and run it in the browser to get the output
 //* 3. debug and see the console.log() messages in the chrome dev tools
 //*/

/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------
'use strict';

var amount = function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
    console.log("");
}
amount(618.30, 890.42);

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------
'use strict'
var max = function maxOfThree(a, b, c) {

    return a > b ? (a > c ? a : c) : (b > c ? b : c);

    console.log(max);
}
max(6, 8, 4);

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
'use strict'

var isVowel = [a, e, i, o, u]; 
var vowel = function isVowel(char) {
    if (char === isVowel); {
        return true;
    } else {
        return false;
}
        console.log("");
    }
    vowel("b");

// Write a function translate() that will translate a text into "rövarspråket". 
// //That is, double every consonant and place an occurrence of "o" in between. 
// //For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
'use strict'

var translate = function rovarspraket(text) {
  var string = text.toLowerCase();
  var vowels = ["a", "e", "i", "o", "u", " "];
  var con = "";
  for (i = 0; i < string.length; i++) {
     var now = string.charAt(i); 
    if (vowels.indexOf(now) != -1)
    con = (con + (now));
   else 
    con = (con + (now + "o" + now));
  }
  return con;
}
translate("this is fun")

    

