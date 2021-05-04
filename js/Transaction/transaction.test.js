const Transaction = require('./transaction');

beforeEach(() => { testTransaction = new Transaction('10-10-2020', 'deposit') });

describe('Transaction stored attributes', () => {
  test('initializes with a date attribute', () => {
    expect(testTransaction.date).toEqual('10-10-2020');
  })
})