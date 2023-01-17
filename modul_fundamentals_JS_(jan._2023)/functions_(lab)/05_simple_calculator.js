function simpleCalculator(numOne, numTwo, operator) {

    let result = 0;

    switch (operator) {
        case 'multiply':
            function multiply() {
                result = numOne * numTwo;
                return result;
            }
            multiply();
            break;
        case 'divide':
            function divide() {
                result = numOne / numTwo;
                return result;
            }
            divide();
            break;
        case 'add':
            function add() {
                result = numOne + numTwo;
                return result;
            }
            add();
            break;
        case 'subtract':
            function subtract() {
                result = numOne - numTwo;
                return result;
            }
            subtract();
            break;
        default:
            break;
    }
    return result;
}

let calculatedSum = simpleCalculator(
    12,
    19,
    'add'
);

console.log(calculatedSum);