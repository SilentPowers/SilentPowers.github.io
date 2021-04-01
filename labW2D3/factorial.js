"use strict";
/*eslint-disable*/
/**
 * 
 * 
 * @param {*} n positive integer 
 * @returns {*} n * (n-1)
 */
function fact(n){
if(n === 1){
  return 1;
}
return  n * fact(n - 1);
}
console.log(fact(10));


/**
 * 
 */
function stringLength(str){
 
  if(str === ""){
    return 0;
  }

  str = str.substr(1);
  return 1 + stringLength(str);
}

//console.log(stringLength("Connor"));


function countLetters(str, letter){
  if(str.length === 0){
    return 0;
  }

  if(str[0]=== letter){
    return 1 + countLetters(str.substr(1), letter)
  } else {
    return countLetters(str.substr(1), letter);
  }

}

console.log(countLetters("connor lakour", "o"))

