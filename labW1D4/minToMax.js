"use strict";
/*
The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

Examples of its work:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525


Math.random() * (max - min) + min;

*/

function random(min, max){

  const randomNumber = Math.random()*(max - min) + min;
  return randomNumber;
}
//console.log(random(1,10));



/*
Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

Any number from the interval min..max must appear with the same probability.

Examples of its work:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
*/
function randomInteger(min, max){

  //adding one gets all possibilites from min - max including 
  const randomInt = Math.trunc(Math.random()* (max - min + 1) + min);

  return randomInt;
}

console.log(randomInteger(3,6));