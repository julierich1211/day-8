
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
function max(a, b) {
    'use strict';
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(max(618.30, 890.42));

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c) {
    'use strict'
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
}
console.log(maxOfThree(6, 8, 4));

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
    'use strict'
var vowels = ["a", "e", "i", "o", "u", " "];
var string = char.toLowerCase();
 
 var i=[];
    for (i = 0; i < string.length; i++) {
        var now = string.charAt(i);
        if (vowels.indexOf(now) === vowels)
          return true;
        else
            return false;
    }
    
};
console.log(isVowel("b"));

// Write a function translate() that will translate a text into "rövarspråket". 
// //That is, double every consonant and place an occurrence of "o" in between. 
// //For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(text) {
    'use strict'
    var string = text.toLowerCase();
     var vowels = ["a", "e", "i", "o", "u", " "];
     var con = "";
     var i = [];
     for (i = 0; i < string.length; i++) {
         var now = string.charAt(i);
         if (vowels.indexOf(now) != -1)
             con = (con + (now));
         else
             con = (con + (now + "o" + now));
     }
     return con;
 }
 console.log(rovarspraket("this is fun"));
//class example below
function rovarspraket(phrase){
    "use strict";
    return phrase.split("").map(function(letter){
        /**
         * letter in each iteration is a character,
         * we test this character whether it is a consonant,
         * if so, return letter+'o'+letter
         * else, just return letter
         * @type {String}
         */
        return "aeiouAEIOU \"'/\\".indexOf(letter) >= 0 ? letter : letter+"o"+letter;

    }).join("");
}
console.log(rovarspraket("this is fun"));
function rovarspraket2(phrase){
    var resultArray = "";

    for(var i = 0; i < phrase.length; i++){
        resultArray +=
            "aeiouAEIOU \"'/\\".indexOf(phrase[i]) >= 0 ? phrase[i] : phrase[i]+"o"+phrase[i];
    }

    return resultArray;
}
// Define a function sum() and a function multiply() that sums and multiplies (respectively) 
// //all the numbers in an array of numbers. 
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------
function sum(a, b, c, d, e) {
    'use strict'
    return a + b + c + d + e;
    console.log(sum);
};
sum(2, 4, 5, 6, 7);

function multiply(a, b, c, d, e) {
    return a * b * c * d * e;
    console.log(multiply);
};
multiply(2, 4, 5, 6, 7);
// Define a function reverse() that computes the reversal of a string. 
// For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------
function reverse(text){
    'use strict';
    var input = (text);
    var reverse = input.split("").reverse().join("");
    return reverse;
}
console.log(reverse("jag testar"));

// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(text){
    "use strict";
var list = text.split(" ");
var longest =0 ;
var word = null;
list.forEach(function(list){

 if (longest < list.length); {
    longest = list.length;
    word = list;
 }
});
return word;
}
console.log(findLongestWord("cat dog house impossible")); 