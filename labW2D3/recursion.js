"use strict";
/*eslint-disable*/

//recursive structure

let company = { // the same object, compressed for brevity
  sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
  development: {
    sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
    internals: [{ name: 'Jack', salary: 1300 }]
  }
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}
console.log(sumSalaries(company)); // 7700


function sumTo(n) {

  if (!(n > 1)) {
    return 1;
  }

  return n + (sumTo(n - 1))
}

console.log(sumTo(100))



function fib(num) {
  if (num === 1) {
    return 1;
  }
  if (num === 0) {
    return 0;
  }
  else {
    return fib(num - 1) + fib(num - 2);

  }
}
console.log(fib(7));


/*
Write a function printList(list) that outputs list items one-by-one.

Make two variants of the solution: using a loop and using recursion.

What’s better: with recursion or without it?
*/
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {

  for(const el of Object.value(list)){
    console.log(el);
   for(const el2 of el){
     for(const el3 of el2){
       console.log(el3);
     }
   }
  }
}
printList(list);