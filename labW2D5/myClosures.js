"use strict";
/*eslint-disable*/
//A closure is like a backpack that a fcn carries around whereever it goes,
//this backpack has all the variables that were present in the environment where the 
//fcn was created

//a clousre gives a fcn access to all the variables of its parent fcn
const secureBooking = function(){
  let passengerCount = 0;

  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`)
  };
};
//the return fcn is stored in the booker variable
//Any fcn always has access to the variable environment of the execution context
//in which the function was created, even after the exectuion context is gone
//So the booker fcn will get access to the variable environment of secureBooking()
const booker = secureBooking();
// booker();
// booker();
// booker(); 


function makeCounter(){
let count = 0;

return function(){
  count++;
  console.log(count);
  return count;

}
}

let counting = makeCounter()

counting()
counting()
counting()