"use strict";

//uppercase first letter

/**
 * 
 * @param {*} str string to uppercase
 * @returns{*} string with first letter capitalized
 */
function ucFirst(str) {
  if(str === " "){
    return " ";
  }
  str.toLowerCase();
  return str[0].toUpperCase() + str.slice(1, str.length);

}

// console.log(upperCase("hello"));



/**
 * 
 * @param {*} str of words
 * @returns{*} boolean, true if it includes 
 */
function checkSpam(str) {
  str = str.toLowerCase();
  if (str.includes("viagra") || str.includes("xxx")) {
    return true;
  }
  else {
    return false;
  }
  //this does the same thing
  // return str.includes("viagra") || str.includes("xxx")

}



/*
Create a function truncate(str, maxlength) that checks the length of the str and, 
if it exceeds maxlength – replaces the end of str with the ellipsis character "…", 
to make its length equal to maxlength.
The result of the function should be the truncated (if needed) string.
*/

function truncate(str, maxLength) {
  let stringEllipsis = "";

  const strLength = str.length;

  if (maxLength < strLength) {
    const diff = maxLength - strLength;
    for (let i = 0; i < diff; i++) {
      stringEllipsis = stringEllipsis + ".";
    }
    str = str.concat(stringEllipsis);
  }
  console.log(str);
}

//extract the money
/*
We have a cost in the form "$120". That is: the dollar sign goes first, 
and then the number.

Create a function extractCurrencyValue(str)
 that would extract the numeric value from such string and return it.
*/

function extractCurrencyValue(str) {

  str = str.replace("$", "");

  return str;

  //or
  // return str.slice(1);

}
extractCurrencyValue("$333");