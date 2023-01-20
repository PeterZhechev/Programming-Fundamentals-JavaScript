function factorialDivision(num1, num2) {

    let firsNum = num1;
    let secondNum = num2;
    for (let i = num1 - 1; i >= 1; i--) {
        firsNum = firsNum * i;
    }
    
    for (let i = num2 - 1; i >= 1; i--) {
        secondNum = secondNum * i;
    }

    return (firsNum / secondNum).toFixed(2);
}

let result = factorialDivision(6, 2);

console.log(result);