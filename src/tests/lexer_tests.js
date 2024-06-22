// lexer_tests.js

const assert = require('assert');
const { tokenize } = require('../lexer/tokenizer');

describe('Tokenizer', () => {
    it('should tokenize a simple string', () => {
        const input = "hello world";
        const expected = ["hello", " ", "world"];
        const actual = tokenize(input);
        assert.deepStrictEqual(actual, expected);
    });
});

