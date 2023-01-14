const sumAll = function(num1, num2) {
    const startNum = num1;
    const endNum = num2;
    let result = 0;

    if (startNum < 0 || endNum < 0) {
        result = "ERROR";
    } else if (typeof startNum != "number" || typeof endNum != "number") {
            result = "ERROR";   
    } else if (startNum < endNum) {
            for (let i = startNum; i <= endNum; i++) {
                result += i;
            }
    } else if (startNum > endNum) {
        for (let i = startNum; i >= endNum; i--) {
            result += i;
        }
    }

    return (result);
};

// Do not edit below this line
module.exports = sumAll;
