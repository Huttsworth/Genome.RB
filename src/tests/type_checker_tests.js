// type_checker_tests.js

const assert = require('assert');
const { checkTypes } = require('../semantic/type_checker');

describe('Type Checker', () => {
    it('should pass for correct types', () => {
        const ast = {
            type: 'Program',
            body: [
                { type: 'Literal', value: 'hello' },
                { type: 'Literal', value: 'world' }
            ]
        };
        assert.doesNotThrow(() => checkTypes(ast));
    });

    it('should throw for incorrect types', () => {
        const ast = {
            type: 'Program',
            body: [
                { type: 'Literal', value: 123 }
            ]
        };
        assert.throws(() => checkTypes(ast), /Type error/);
    });
});

