// code_generator_tests.js

const assert = require('assert');
const { generateCode } = require('../codegen/code_generator');

describe('Code Generator', () => {
    it('should generate code for literals', () => {
        const ast = {
            type: 'Program',
            body: [
                { type: 'Literal', value: 'hello' }
            ]
        };
        const expected = 'PUSH hello';
        const actual = generateCode(ast);
        assert.strictEqual(actual, expected);
    });
});

