/*
In this exercise, we will be converting a normal string into camelCase text.
*/

const camelCase = function (input) {
  // Your code here
  let trimInput = input.trim();
  let hasWhiteSpace = false;
  let camelCaseString = ""; 
  
  if(!trimInput.includes(" ")) {
    return trimInput;
  }
  
  for (let i = 0; i < trimInput.length; i++ ) {
    if (trimInput[i] === " ") {
      hasWhiteSpace = true;
    } else if (hasWhiteSpace && trimInput[i] !== " ") {
      camelCaseString = camelCaseString + trimInput[i].toUpperCase();
      hasWhiteSpace = false;
    } else {
      camelCaseString = camelCaseString + trimInput[i];
    }
  }

  return camelCaseString;
};

console.log(camelCase("this is a string")); //thisIsAString
console.log(camelCase("loopy lighthouse")); //loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); //supercalifragalisticexpialidocious