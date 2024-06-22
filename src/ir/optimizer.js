// optimizer.js

const optimize = (ir) => {
    // Simple optimization logic
    return ir.filter(instruction => instruction !== 'NOOP');
};

module.exports = { optimize };

