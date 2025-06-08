const reverseString = function (startingString) {
  let stringArray = startingString.split("");
  let reversedArray = stringArray.reverse();
  let newString = reversedArray.join("");
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
