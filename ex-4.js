let calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    return a / b;
  },
  mutiply: (a, b) => {
    return a * b;
  },
};
let addResult = calculator.add(10, 5);
console.log(addResult);

let divideResult = calculator.divide(3000, 10);
console.log(divideResult);
