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
    this.transactions.push(new Transaction(amount.toString(), this.balance));
  }

  withdraw(amount) {
    this.balance -= amount;
    this.transactions.push(new Transaction(amount.toString(), this.balance));
  }

  statement() {
    return `${this.transactions[0].amount} ${this.transactions[0].associatedBalance}`
  }
}

Account.DEFAULT_BALANCE = 0;

class Transaction {
  constructor(amount, balance) {
    this.amount = amount;
    this.associatedBalance = balance
  }
}

module.exports = Account;