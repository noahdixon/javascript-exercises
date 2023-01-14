const reverseString = function(inputString) {

    if(typeof inputString !== 'string') {
        return 'ERROR'
    }

    let reverse = '';
    for (let i = inputString.length; i > 0; i--) {
        reverse += inputString.charAt(i-1);
    }

    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
