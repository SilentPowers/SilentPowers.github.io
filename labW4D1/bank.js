"use strict";
/* global exports require Account   SavingsAccount CheckingAccount */
/*eslint-disable*/

const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
const chk = require("./checkingaccount.js");
const CheckingAccount = chk.CheckingAccount;
const sav = require("./savingsaccount.js");
const SavingsAccount = sav.SavingsAccount;

/*
Create an endOfMonth() method on the Bank class, and on Account, SavingsAccount,
and CheckingAccount. The method on the Bank class it should go through the array calling
endOfMonth() on each of the accounts collecting their output. For normal Accounts the
endOfMonth() method should return an empty string. For SavingsAccounts it should call
the addInterest() method and return a string specifying how much interest was added to
this account (see example below), and for CheckingAccounts it should check if the balance is
below zero, and if so return a string with a warning (see example below). Test with
bankTests.js.

Next create a Bank class, a Bank object should have an array of Account objects, and have
addAccount(), addSavingsAccount(interest),
addCheckingAccount(overdraft) methods each of which returns the number of the
created account. 
Also add a closeAccount(number) method that closes (removes from the
array) the account with that number,
 and a accountReport() method that returns a String 
with each account on its own line. Use a static nextNumber variable on the Bank class to know
what the number for the next account will be. Test with bankTests.js.

*/
class Bank {
  constructor() {
    this._accounts = [];
  }
  static nextNumber = 1;

  addSavingsAccount(interest) {
    this._accounts.push({ [Bank.nextNumber]: interest })
    return Bank.nextNumber++;
  }

  addAccount() {
    this._accounts.push({ [Bank.nextNumber]: 0 });
    return Bank.nextNumber++;
  }

  addCheckingAccount(overdraft) {
    this._accounts.push({ [Bank.nextNumber]: overdraft })
    return Bank.nextNumber++;
  }

  /**
   * 
   * @returns {*} number of Account object
   */
  getNumber() {
    return Bank.nextNumber;
  }


  getBalance() {
    return
  }

  getOverdraft() {

  }





  closeAccount(number) {
   
    this._accounts.forEach(function(acc){
      if (Number(Object.keys(acc)) === number){
        this._accounts.splice(el[number],1)
      }
      })

      // for(const el of this._accounts){
      //   console.log(el[number])
      // this._accounts.splice(el[number],1)
      // }
      // }
  //   let idx = this._accounts.findIndex((element) => {
  //     return element.getNumber() === number;

  //   });
  //   this._accounts.splice(idx, 1);
  // }
    

    }
  //     method that returns a String 
  // with each account on its own line.
  /*
  "SavingsAccount 2: balance: 0 interest: 2.5\nCheckingAccount 3:
   balance: 0 overdraft limit: 500\n");
          });
  */
  accountReport() {
    console.log()
  }

}
const bank = new Bank();
console.log(bank.addAccount())
console.log(bank.addSavingsAccount(5))
console.log(bank.addCheckingAccount(100))
console.log(bank._accounts)
console.log(bank.closeAccount(1))
//console.log(bank.accountReport())
//console.log(bank.getNumber())
console.log(bank._accounts)

/* exports at end of file since exporting an object, which can only be referenced after definition   */
exports.Bank = Bank;
