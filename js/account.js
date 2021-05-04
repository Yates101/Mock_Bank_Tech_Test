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
}

Account.DEFAULT_BALANCE = 0;

module.exports = Account;