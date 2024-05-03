/*
The input data for this exercise will be two dimensional array (an array of arrays), where each sub-array will have two numeric values.

Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times, if there are multiple sets of values each set should be separated by a comma. If there is only one set of values then you should omit the comma.
*/

const repeatNumbers = function (data) {

  let repeated = "";
  let repeatedContainer = [];

  for (let elements of data) {
    for (let x = 0; x < elements[1]; x++) {
      repeated = repeated + elements[0];
    }
    repeatedContainer.push(repeated);
  }

  return repeatedContainer.toString();
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
// console.log(
//   repeatNumbers([
//     [10, 4],
//     [34, 6],
//     [92, 2],
//   ])
// );