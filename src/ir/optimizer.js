// optimizer.js

const optimize = (ir) => {
    // Ensure ir is an array
    if (!Array.isArray(ir)) {
        throw new TypeError('Expected ir to be an array');
    }
    // Simple optimization logic
    return ir.filter(instruction => instruction !== 'NOOP');
};

module.exports = { optimize };

