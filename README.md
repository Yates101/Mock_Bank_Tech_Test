# Bank Tech Test

A simple banking program, written in Javascript

### User Requirements

The requirements for this challenge were provided as following:

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```
## Solution Planning

![image](./assets/classDiagram.png)

### Testing

#### Unit Testing
* Jest was used for the testing of this project * for setup, run the following within the directory:

```
npm install --save-dev jest
```

* Now, simply run `jest` to run the existing testing suite.

#### Feature Testing
* For feature testing, open the provided index.html file in chrome, open the console, and enter any of the following commands to see the response. (The examples given carry out the requirements)
```console
testAccount = new Account();
```
```console
testAccount.deposit(1000, 10-01-2012);
```
```console
testAccount.deposit(2000, 13-01-2012);
```
```console
testAccount.withdraw(500, 14-01-2012);
```
```console
testAccount.checkBalance();
```

