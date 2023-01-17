const removeFromArray = function() {
    const inputArray = arguments[0];
    const removeSet = new Set();

    for (let i = 1; i < arguments.length; i++) {
        // if (typeof arguments[i] !== typeof inputArray[0]) {
        //     continue;
        // }
        removeSet.add(arguments[i]);
    }

    const inputLength = inputArray.length;

    for (let i = 0; i < inputLength; i++) {
        if(removeSet.has(inputArray[i])) {
            inputArray.splice(i, 1);
            i--;
        }
    }

    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
