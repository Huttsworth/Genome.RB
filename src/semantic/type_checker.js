// type_checker.js

const checkTypes = (ast) => {
    // Simple type checking logic
    ast.body.forEach(node => {
        if (node.type === 'Literal' && typeof node.value !== 'string') {
            throw new Error(`Type error: expected string but got ${typeof node.value}`);
        }
    });
};

module.exports = { checkTypes };

