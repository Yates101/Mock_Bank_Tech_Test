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

  withdraw(amount, date) {
    this.balance -= amount;
    this.transactions.push(new Transaction(amount.toString(), this.balance, date));
  }

  statement() {
    var statement = ""
    this.transactions.forEach(trans =>
     statement += `${trans.date} ${trans.amount} ${trans.associatedBalance}\n`
    )
    return statement;
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