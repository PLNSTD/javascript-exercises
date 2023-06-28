const sumAll = function(startValue, endValue) {
    if (!Number.isInteger(startValue) || !Number.isInteger(endValue)) return 'ERROR';
    if (startValue < 0 || endValue < 0) return 'ERROR';
    if (startValue > endValue) {
        let temp = startValue;
        startValue = endValue;
        endValue = temp;
    }
    let sum = 0;
    for(let i = startValue; i < endValue + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
