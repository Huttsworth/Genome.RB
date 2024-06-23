// standard_library_tests.js

const assert = require('assert');
const stdLib = require('../standard_library');

describe('Standard Library', () => {
    it('should return the length of a string', () => {
        assert.strictEqual(stdLib.stringLength("hello"), 5);
    });

    it('should concatenate two strings', () => {
        assert.strictEqual(stdLib.stringConcat("hello", " world"), "hello world");
    });

    it('should add two numbers', () => {
        assert.strictEqual(stdLib.add(1, 2), 3);
    });

    it('should subtract two numbers', () => {
        assert.strictEqual(stdLib.subtract(5, 3), 2);
    });

    // New test cases
    it('should multiply two numbers', () => {
        assert.strictEqual(stdLib.multiply(2, 3), 6);
    });

    it('should divide two numbers', () => {
        assert.strictEqual(stdLib.divide(6, 2), 3);
    });
});

