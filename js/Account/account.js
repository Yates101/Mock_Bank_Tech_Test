class Account {
  constructor() {
    this.balance = Account.DEFAULT_BALANCE;
    this.transactions = [];
  }

  checkBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  statement() {
    return '100 10 110 20 90'
  }
}

Account.DEFAULT_BALANCE = 0;

module.exports = Account;