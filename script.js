// function declaration
function functionDeclaration(firstNumber, secondNumber) {
    const squaredFirstNumber = firstNumber * firstNumber;
    const squaredSecondNumber = secondNumber * secondNumber;
    const addTogether = squaredFirstNumber + squaredSecondNumber;
    const squaredBothNumbers = addTogether * addTogether;
    return squaredBothNumbers;
}

console.log(functionDeclaration(2, 2));


// function expression
const functionExpression = function(firstNumber, secondNumber) {
    const squaredFirstNumber = firstNumber * firstNumber;
    const squaredSecondNumber = secondNumber * secondNumber;
    const addTogether = squaredFirstNumber + squaredSecondNumber;
    const squaredBothNumbers = addTogether * addTogether;
    return squaredBothNumbers;
};

console.log(functionExpression(2, 2));


// shorter version function expression
const functionExpressionShort = function(firstNumber, secondNumber) {
    const sum = firstNumber * firstNumber + secondNumber * secondNumber;
    return sum * sum;
};

console.log(functionExpressionShort(2, 2));


// arrow function
const arrowFunction = (firstNumber, secondNumber) => {
    const squaredFirstNumber = firstNumber * firstNumber;
    const squaredSecondNumber = secondNumber * secondNumber;
    const addTogether = squaredFirstNumber + squaredSecondNumber;
    const squaredBothNumbers = addTogether * addTogether;
    return squaredBothNumbers;
};

console.log(arrowFunction(2, 2));


// shorter version arrow function
const arrowFunctionShort = (firstNumber, secondNumber) => {
    const sum = firstNumber * firstNumber + secondNumber * secondNumber;
    return sum * sum;
};

console.log(arrowFunctionShort(2, 2));
