/*
In this challenge, we'll need to implement four functions.

The first three will calculate the volume of the individual shapes:

1. sphereVolume()will calculate the volume of a sphere given a radius
2. coneVolume() will calculate the volume of a cone given a radius and a height
3. prismVolume() will calculate the volume of a prism given a height, a width, and a depth

4. The fourth function, totalVolume(), will receive an array containing the different shapes that make up a single attraction. The totalVolume function should use the previous three functions to calculate the total volume of an attraction.

Implement the functions one by one
*/

// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function (radius) {
  //Volume of Sphere formula
  // V = 4/3 (PI)(radius)³

  let sphereVol = ((4 * 3.14159) * (Math.pow(radius, 3))) / 3;

  return sphereVol;
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189); //true

const coneVolume = function (radius, height) {
  // Volume of a cone formula
  // V = 1/3 * PI(radius)²(height)

  let coneVol = (3.14159 * (Math.pow(radius, 2)) * height) / 3

  return coneVol;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49); //true

const prismVolume = function (height, width, depth) {
  // Volume of a prism formula
  // V = Base Area * height; where Base area = depth * width

  let prismVol = depth * width * height;

  return prismVol;
};

console.log(prismVolume(3, 4, 5) === 60); //true

const totalVolume = function (solids) {
  // Code here? Yup!

};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000); //true
