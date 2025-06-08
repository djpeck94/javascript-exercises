const removeFromArray = function (arrayOne, ...arrayTwo) {
  // take an element out of arrayTwo

  //search arrayOne for that element

  //remove element from arrayOne if it exists

  //repeat until arrayTwo is empty

  //return new Array

  while (arrayTwo.length > 0) {
    let num = arrayTwo.pop();
    arrayOne.forEach(() => {
      let numIndex = arrayOne.indexOf(num);
      if (numIndex >= 0) {
        arrayOne.splice(numIndex, 1);
      }
    });
  }

  return arrayOne;
};

// Do not edit below this line
module.exports = removeFromArray;
