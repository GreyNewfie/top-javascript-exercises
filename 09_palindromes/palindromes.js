const palindromes = function (string) {
    const punctuationlessString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    const origStringArray = punctuationlessString.split(" ");
    const testString = origStringArray.join("").toLowerCase();
    let revString = reverseString(string).toLowerCase();

    if (testString === revString) {
        return true;
    } else {
        return false;
    }
};

const reverseString = function (string) {
    // Removes special characters, then white spaces from the string and makes it lower case
    const noPunctuationString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g, "").toLowerCase();
    const stringArray = noPunctuationString.split("");
    let reverseText = "";

    for (i = stringArray.length - 1; i >= 0; i--) {
        reverseText += stringArray[i];
    }

    return(reverseText);
};

// Do not edit below this line
module.exports = palindromes;
