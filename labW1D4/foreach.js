"use strict";

// [1,5,16,3,108].forEach(function(element, index, array){
//   element % 2 === 0 ? console.log(element + " Is Even") : 'isOdd';

// });

// let someUsers = users.filter(function(item){
//   return item.id < 3;
// });

const nums = [1,5,18,2,77,108]

//returns a new array of all filterd elements
const filter = nums.filter(function(num){
  const even = num % 2 == 0;
  return even;
});
//console.log(filter);


//returns the element of first truthy value
const find = nums.find(function(num){
  return num % 2 === 0;
  
});

console.log(find);


//returns the index of first truthy value
const findI = nums.findIndex(function(num, i){
  return num % 2 === 0;
});

console.log(findI);