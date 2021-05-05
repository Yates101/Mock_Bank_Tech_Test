class Account {
  constructor() {
    this.balance = Account.DEFAULT_BALANCE;
    this.transactions = [];
  }

  checkBalance() {
    return this.balance;
  }

  deposit(amount, date) {
    this.balance += amount;
    this.transactions.push(new Transaction(amount.toString(), this.balance, date));
  }

  withdraw(amount) {
    this.balance -= amount;
    this.transactions.push(new Transaction(amount.toString(), this.balance));
  }

  statement() {
    return `${this.transactions[0].date} ${this.transactions[0].amount} ${this.transactions[0].associatedBalance}`
  }
}

Account.DEFAULT_BALANCE = 0;

class Transaction {
  constructor(amount, balance, date) {
    this.amount = amount;
    this.associatedBalance = balance
    this.date = date
  }
}

module.exports = Account;