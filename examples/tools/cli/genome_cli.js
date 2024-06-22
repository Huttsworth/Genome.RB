#!/usr/bin/env node

const fs = require('fs');
const { tokenize } = require('../../src/lexer/tokenizer');
const { parse } = require('../../src/parser/parser');
const { checkTypes } = require('../../src/semantic/type_checker');
const { generateCode } = require('../../src/codegen/code_generator');
const { optimize } = require('../../src/ir/optimizer');

const run = (filename) => {
    const code = fs.readFileSync(filename, 'utf8');
    const tokens = tokenize(code);
    const ast = parse(tokens);
    checkTypes(ast);
    const ir = generateCode(ast);
    const optimizedIr = optimize(ir);
    console.log(optimizedIr);
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

