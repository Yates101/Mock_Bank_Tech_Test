class Account {
  constructor () {
    this.balance = Account.DEFAULT_BALANCE
    this.transactionHistory = []
  }

  deposit (amount, date) {
    this.balance += amount
    this.transactionHistory.push(new Deposit(amount, this.balance, date))
  }

  withdraw (amount, date) {
    this.balance -= amount
    this.transactionHistory.push(new Withdrawal(amount, this.balance, date))
  }

  statement () {
    let statement = 'date || credit || debit || balance\n'
    this.transactionHistory.reverse().forEach(transaction => {
      statement += transaction.statementFormat()
    })
    console.log(statement)
    return statement
  }
}

Account.DEFAULT_BALANCE = 0

class Deposit {
  constructor (amount, balance, date, type) {
    this.amount = amount
    this.associatedBalance = balance
    this.date = date
    this.type = type
  }

  statementFormat () {
      return `${this.date} || ${this.amount}.00 || || ${this.associatedBalance}.00\n`
  }
}

class Withdrawal {
  constructor (amount, balance, date) {
    this.amount = amount
    this.associatedBalance = balance
    this.date = date
  }

  statementFormat () {
      return `${this.date} || || ${this.amount}.00 || ${this.associatedBalance}.00\n`
  }
}

module.exports = Account
