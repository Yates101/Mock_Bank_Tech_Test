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
  test('returns a history of a previous deposit amount', () => {
    testAccount.deposit(10);  
    expect(testAccount.statement()).toInclude('10');
  })

  test('returns a history of a previous withdrawal amount', () => {
    testAccount.withdraw(10);  
    expect(testAccount.statement()).toInclude('10');
  })

  test('returns the balance, as adjusted by deposit', () => {
    testAccount.deposit(10);
    expect(testAccount.statement()).toIncludeRepeated('10', 2);
  })

  test('returns the balance, as adjusted by withrawal', () => {
    testAccount.withdraw(10);
    expect(testAccount.statement()).toIncludeMultiple(['10', '-10']);
  })
})
