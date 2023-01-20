function calculator(number, operator, anotherNumber) {

    output = 0;

    if (operator === "+") {
        output = number + anotherNumber;
    } else if (operator === "-") {
        output = number - anotherNumber;
    } else if (operator === "*") {
        output = number * anotherNumber;
    } else if (operator === "/") {
        output = number / anotherNumber;
    }

    console.log((output).toFixed(2));

}

calculator(5, "*", 15);