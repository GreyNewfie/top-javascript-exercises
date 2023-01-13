const reverseString = function(string) {
    let text = string;
    const stringArray = text.split("");
    let reverseText = "";

    for (i = stringArray.length - 1; i >= 0; i--) {
        reverseText += stringArray[i];
    }
   
    return(reverseText);
};

// Do not edit below this line
module.exports = reverseString;
