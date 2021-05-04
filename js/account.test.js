const Account = require('./account')

let testAccount = new Account();

test('account initializes with a default balance of zero', () => {
  expect(testAccount.checkBalance()).toEqual(0);
})