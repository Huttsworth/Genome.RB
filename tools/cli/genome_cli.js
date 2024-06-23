#!/usr/bin/env node

const fs = require('fs');
const { tokenize } = require('../../src/lexer/tokenizer');
const { parse } = require('../../src/parser/parser');
const { checkTypes } = require('../../src/semantic/type_checker');
const { generateCode } = require('../../src/codegen/code_generator');
const { optimize } = require('../../src/ir/optimizer');
const stdLib = require('../../src/standard_library');

const run = (filename) => {
    const code = fs.readFileSync(filename, 'utf8');
    const tokens = tokenize(code);
    const ast = parse(tokens);
    checkTypes(ast);
    const ir = generateCode(ast);
    const optimizedIr = optimize(ir);
    console.log(optimizedIr);
    // Example usage of standard library
    console.log('Standard Library:');
    console.log('stringLength("hello"):', stdLib.stringLength("hello"));
    console.log('stringConcat("hello", " world"):', stdLib.stringConcat("hello", " world"));
    console.log('add(1, 2):', stdLib.add(1, 2));
    console.log('subtract(5, 3):', stdLib.subtract(5, 3));
};

if (require.main === module) {
    const filename = process.argv[2];
    if (!filename) {
        console.error('Usage: genome-cli <filename>');
        process.exit(1);
    }
    run(filename);
}

module.exports = { run };

