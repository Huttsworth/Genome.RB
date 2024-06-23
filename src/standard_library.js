// standard_library.js

const stringLength = (s) => s.length;
const stringConcat = (s1, s2) => s1 + s2;
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

// New functions
const arraySum = (arr) => arr.reduce((acc, val) => acc + val, 0);
const arrayProduct = (arr) => arr.reduce((acc, val) => acc * val, 1);

module.exports = { stringLength, stringConcat, add, subtract, multiply, divide, arraySum, arrayProduct };

