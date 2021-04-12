"use strict";
/*eslint-disable*/

class Person {
  constructor(fName, bYear) {
    this.fName = fName;
    this.bYear = bYear;

  }

  calcAge() {
    console.log(2037 - this.bYear)
  }

  greet() {
    console.log(this.fName)
  }

  get age() {
    return 2037 - this.bYear;
  }
  set fullName(str) {
    if (str.includes(" ")) {
      this._fullName = str
    }
    else {
      console.log(`Not a full name`)
    }
  }

  get fullName(){
    return this._fullName;
  }


}
// Person.prototype.calcAge = function(){
//   console.log(2037-this.bYear);
// };

//class has a lot going on behind the scenes, 
//class is a layer of abstraction over constructor fcns
class Student extends Person {
  constructor(fName, bYear, course) {
    //super needs to happen first
    //constructor fcn of the parent class
    //when creating a student obj. you dont even really need this super and constructor fcn
    super(fName, bYear)
    this.course = course;
  }

  introduce(){
    console.log(`My name is ${this.fName} and i study ${this.course}`)
  }

}

const connor = new Student("Connor", 1990, "Astro-biology")
connor.introduce()
connor.calcAge()
