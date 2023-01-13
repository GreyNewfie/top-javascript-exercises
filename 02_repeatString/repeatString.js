const repeatString = function(string, num) {
    const userString = string;
    let stringRepeated = "";
    const repeat = num;

    if (repeat >= 0) {
        for (i = 0; i < repeat; i++) {
            stringRepeated += userString;
        }
    } else {
        stringRepeated = "ERROR";
    }

    return(stringRepeated);
};

// Do not edit below this line
module.exports = repeatString;
