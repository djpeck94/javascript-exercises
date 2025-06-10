const leapYears = function (myYear) {
  // Gregorian rule: every 400th year *is* a leap year.
  if (myYear % 400 === 0) return true;

  // Otherwise, years divisible by 100 are *not* leap years.
  if (myYear % 100 === 0) return false;

  // All other years that are divisible by 4 are leap years.
  return myYear % 4 === 0;
};

// Do not edit below this line
module.exports = leapYears;
