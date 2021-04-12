"use strict";

const Person = {

calcAge(){
  console.log(2037 - this.bYear);
},

init(fName, bYear){
  this.fName = fName;
  this.bYear = bYear;
}
};
const connor = Object.create(Person);