const repeatString = function (word, count) {
  let repeatedString = "";

  if (count < 0) {
    return "ERROR";
  }

  for (let i = 0; i < count; i++) {
    repeatedString += word;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
