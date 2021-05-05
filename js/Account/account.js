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
    this.transactions.forEach(transaction => {
      if(transaction.type === 'deposit') {
        statement += `${transaction.date} || ${transaction.amount}.00 || || ${transaction.associatedBalance}.00\n`
      } else if (transaction.type === 'withdrawal') {
        statement += `${transaction.date} || || ${transaction.amount}.00 || ${transaction.associatedBalance}.00\n`
      }
    })
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
}

module.exports = Account;