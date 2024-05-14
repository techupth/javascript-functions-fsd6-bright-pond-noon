// Start coding here

const add = (a, b) => {
  return a + b;
};
let newAdd = add(10, 5);
console.log(newAdd);

const subtract = (a, b) => {
  return a - b;
};
let newSubtract = subtract(10, 5);
console.log(newSubtract);

const multiply = (a, b) => {
  return a * b;
};
let newMultiply = multiply(10, 5);
console.log(newMultiply);

const divide = (a, b) => {
  return a / b;
};
let newDivide = divide(10, 5);
console.log(newDivide);

let calculator = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
};

const addResult = calculator.add(10, 20);
console.log(addResult);

const divideResult = calculator.divide(3000, 10);
console.log(divideResult);

const Subtractresult = calculator.subtract(50, 800);
console.log(Subtractresult);

const multiplyresult = calculator.multiply(100, 80);
console.log(multiplyresult);

let calculator = {
    add: (a, b) => {
        return a + b
},

subtract: (a, b) => {
    return a - b
},

multiply: (a, b) => a * b, 
   
divide: (a, b) => a / b,
    
}

const addResult = calculator.add(10, 20)

const divideResult = calculator.divide(3000, 10)

console.log(addResult)
console.log(divideResult)

