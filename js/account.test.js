const Account = require('./account')

let testAccount = new Account();

describe('constructor testing', () => {
  test('account initializes with a default balance of zero', () => {
    expect(testAccount.balance).toEqual(0);
  })
})

describe('deposit function', () => {
  test('it updates the balance value by the given amount', () => {
    expect(testAccount.balance).toEqual(0);
    testAccount.deposit(10);
    expect(testAccount.balance).toEqual(10);
  })
})
 