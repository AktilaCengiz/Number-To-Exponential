[![NPM](https://nodei.co/npm/number-to-exponential.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.com/package/number-to-exponential/)
[![NPM](https://img.shields.io/npm/v/number-to-exponential.svg?maxAge=3600)](https://npmjs.com/package/number-to-exponential/)
[![NPM](https://img.shields.io/npm/dt/number-to-exponential?maxAge=3600)](https://npmjs.com/package/number-to-exponential/)

# 📌 What does this module do? 

* Change to normal number to exponential number with easily.
* Example: 10 ➟ ¹⁰ [number to string]
* Optional: you can add to space example: 10 ➟ ¹ ⁰

## 📕  How to use it?

```js
const numExp = require("number-to-exponential");

var number = 10;

async function exp() {
    var exponentialNumber = numExp.run(number);
    console.log(exponentialNumber);//¹⁰
};

exp()
```

```js
const numExp = require("number-to-exponential");

var number = 10;
var space = true;

async function exp() {
    var exponentialNumber = numExp.run(number,space);
    console.log(exponentialNumber);//¹ ⁰
};

exp()
```
