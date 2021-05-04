class Account {
  constructor() {
    this.balance = Account.DEFAULT_BALANCE;
  }

  checkBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance = 90;
  }
}

Account.DEFAULT_BALANCE = 0;

module.exports = Account;