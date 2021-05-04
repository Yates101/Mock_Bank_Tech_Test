const Transaction = require('./transaction');

beforeEach(() => { testTransaction = new Transaction('10-10-2020', 'deposit', 100) });

describe('Transaction stored attributes', () => {
  test('initializes with a date attribute', () => {
    expect(testTransaction.date).toEqual('10-10-2020');
  })

  test('initializes with a type attribute', () => {
    expect(testTransaction.type).toEqual('deposit');
  })

  test('initializes with an amount attribute', () => {
    expect(testTransaction.amount).toEqual(100);
  })
})