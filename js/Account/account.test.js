const Account = require('./account')

beforeEach(() => { testAccount = new Account() });

describe('Deposit function', () => {
  test('updates the balance value by adding the given amount', () => {
    expect(testAccount.balance).toEqual(0);
    testAccount.deposit(10);
    expect(testAccount.balance).toEqual(10);
  })
})

describe('Withdrawal function', () => {
  test('updates the balance value by subtracting the given amount', () => {
    testAccount.deposit(100);
    expect(testAccount.balance).toEqual(100);
    testAccount.withdraw(10);
    expect(testAccount.balance).toEqual(90);
  })
})

describe('Statement function', () => {
  test('returns a history of the previous tranactions, along with the balance', () => {
    testAccount.deposit(100);  
    testAccount.deposit(10);
    testAccount.withdraw(20);
    expect(testAccount.statement()).toIncludeMultiple(['100', '10', '110', '20', '90']);
  })
})
