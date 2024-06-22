// parser_tests.js

const assert = require('assert');
const { parse } = require('../parser/parser');

describe('Parser', () => {
    it('should parse tokens into an AST', () => {
        const tokens = ["hello", " ", "world"];
        const expected = {
            type: 'Program',
            body: [
                { type: 'Literal', value: 'hello' },
                { type: 'Literal', value: ' ' },
                { type: 'Literal', value: 'world' }
            ]
        };
        const actual = parse(tokens);
        assert.deepStrictEqual(actual, expected);
    });
});

