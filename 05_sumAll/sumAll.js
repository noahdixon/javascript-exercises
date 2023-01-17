const sumAll = function(numOne, numTwo) {

    if(numOne < 0 || numTwo < 0 || typeof numOne !== 'number' || typeof numTwo !== 'number') {
        return "ERROR";
    }

    let largerNum = (numOne >= numTwo) ? numOne : numTwo;
    let smallerNum = (numOne <= numTwo) ? numOne : numTwo;
    console.log(largerNum);
    console.log(smallerNum);
    let sum = 0;
    
    for (let i = smallerNum; i <= largerNum; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
