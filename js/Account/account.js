class Account {
  constructor() {
    this.balance = Account.DEFAULT_BALANCE;
    this.transactions = [];
  }

  deposit(amount, date) {
    this.balance += amount;
    this.transactions.push(new Transaction(amount.toString(), this.balance, date, 'deposit'));
  }

  withdraw(amount, date) {
    this.balance -= amount;
    this.transactions.push(new Transaction(amount.toString(), this.balance, date, 'withdrawal'));
  }

  statement() {
    var statement = "date || credit || debit || balance\n"
    this.transactions.reverse().forEach(transaction => {
      statement += transaction.statementFormat()
    })
    console.log(statement);
    return statement;
  }
}

Account.DEFAULT_BALANCE = 0;

class Transaction {
  constructor(amount, balance, date, type) {
    this.amount = amount;
    this.associatedBalance = balance
    this.date = date
    this.type = type
  }

  statementFormat() {
    if(this.type === 'deposit') {
      return `${this.date} || ${this.amount}.00 || || ${this.associatedBalance}.00\n`
    } else if (this.type === 'withdrawal') {
      return `${this.date} || || ${this.amount}.00 || ${this.associatedBalance}.00\n`
    }
  }
}

module.exports = Account;