"use strict";
/*eslint-disable*/

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    //mission critical data, need to protect it, by making underscore by convention
    //protected property now but not truly private
    this._movements = [];
    // this.locale = navigator.language;
  }
  
  //Public interface
  getMovements(){
    return this._movements;
  }
  deposit(value) {
    this._movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }

  //Protected
  _approveLoan(value) {
    return true;
  }

  requestLoan(value) {
    if (this.approveLoan(value)) {
      this.deposit(value);
      console.log("Loan approved")
    }
  }

}


const acc1 = new Account("Con", "USD", 444);

acc1.deposit(4444);
acc1.withdraw(333);
console.log(acc1.getMovements())
