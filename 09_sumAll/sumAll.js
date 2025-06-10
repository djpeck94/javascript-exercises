const sumAll = function (numOne, numTwo) {
  let sum = 0;

  let storeNums = [numOne, numTwo];

  storeNums.sort((a, b) => a - b);
  numOne = storeNums[0];
  numTwo = storeNums[1];

  if (
    numOne < 0 ||
    numTwo < 0 ||
    numOne % 1 != 0 ||
    numTwo % 1 != 0 ||
    typeof numOne != "number" ||
    typeof numTwo != "number"
  ) {
    return "ERROR";
  }

  let numArray = [];
  for (let i = numOne; i <= numTwo; i++) {
    numArray.push(i);
  }

  for (let j = 0; j < numArray.length; j++) {
    sum += numArray[j];
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
