const removeFromArray = function(array, ...theArgs) {
    let myArray = array;
    const myArgs = theArgs;
    console.log(theArgs);
    //given an array
    //given one or more arguments
    //for each argument
    //search the array to see if the argument is inside it
    //if so, remove that item from the array
    //if not, don't change the array
    for (let arg of myArgs) {
        const index = myArray.indexOf(arg);

        if (index > -1) {
            myArray.splice(index, 1);
        }
    }

    return(myArray);
};

// Do not edit below this line
module.exports = removeFromArray;
