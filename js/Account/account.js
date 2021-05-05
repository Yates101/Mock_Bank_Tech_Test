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
    this.transactions.push(new Transaction(amount.toString()));
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  statement() {
    return this.transactions[0].amount;
  }
}

Account.DEFAULT_BALANCE = 0;

class Transaction {
  constructor(amount) {
    this.amount = amount;
  }
}

module.exports = Account;