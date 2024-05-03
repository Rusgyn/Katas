/*
you'll be adding only the numbers in the array which match the given condition.
*/

const conditionalSum = function(values, condition) {
  
  let sum = 0;

  if (!values || !Array.isArray(values)) {
    return sum;
  }

  for (let value of values) {
    if (condition === "even" && value % 2 === 0) {
      sum = sum + value;
    } else if (condition === "odd" && value % 2 !== 0) {
      sum = sum + value;
    }
  }

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); //OUTPUT: 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); //OUTPUT: 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); //OUTPUT: 144
console.log(conditionalSum([], "odd")); //OUTPUT: 0
console.log(conditionalSum({ greeting:"hi" }, "odd")); //OUTPUT: 0
console.log(conditionalSum(undefined, "odd")); //OUTPUT: 0