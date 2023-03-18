'use strict';

const validateIndex = (index, length) => {
    if (index < 0 || index >= length) {
        throw new Error('Index out of range');
    }
};

const validateCharType = (value) => {
    if (typeof value !== 'string' || typeof value == 'string' && value.length !== 1) {
        throw new Error('Wrong element type');
    }
};

export { validateIndex, validateCharType };
