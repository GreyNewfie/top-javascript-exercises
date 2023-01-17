const add = function(num1, num2) {
  let answer = num1 + num2;
  return answer;
};

const subtract = function(num1, num2) {
  let answer = num1 - num2;
  return answer;
};

const sum = function(array) {
  const numArray = array;
  let answer = 0;
  
  for (let num of numArray) {
    answer += num;
  }

  return answer;
};

const multiply = function(array) {
  const numArray = array;
  let answer = numArray[0];

  for (i = 1; i < numArray.length; i++) {
    answer *= numArray[i]; 
  }

  return answer;
};

const power = function(num1, num2) {
	const answer = Math.pow(num1, num2);
  return answer;
};

const factorial = function(num) {
	let answer = 1;

  if (num === 0 || num === 1) {
    return answer;
  } else if (num > 1) {
    for (i = 1; i <= num; i++) {
      answer *= i;
    }
    return answer;
  } else {
    return "Not a valid numer";
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
