// parser.js

const parse = (tokens) => {
    // Simple parser logic
    const ast = {
        type: 'Program',
        body: tokens.map(token => ({ type: 'Literal', value: token }))
    };
    return ast;
};

module.exports = { parse };

