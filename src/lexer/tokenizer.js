// tokenizer.js

const tokenize = (input) => {
    const tokens = [];
    const regex = /\w+|\s+|[^\s\w]+/g;
    let match;
    
    while ((match = regex.exec(input)) !== null) {
        tokens.push(match[0]);
    }

    return tokens;
};

module.exports = { tokenize };

