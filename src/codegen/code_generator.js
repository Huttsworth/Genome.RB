// code_generator.js

const generateCode = (ast) => {
    // Simple code generation logic
    return ast.body.map(node => {
        if (node.type === 'Literal') {
            return `PUSH ${node.value}`;
        }
        throw new Error(`Unknown node type: ${node.type}`);
    }).join('\n');
};

module.exports = { generateCode };

