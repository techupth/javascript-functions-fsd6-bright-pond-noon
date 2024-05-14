// Start coding here
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
