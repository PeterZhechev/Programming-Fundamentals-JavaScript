function jansNotation(instructions) {

    let operand1 = 0;
    let operand2 = 0;
    let index = 0;
    let resultArr = [];
    const instructionsLength = instructions.length;

    index = 0;
    while (index < instructionsLength) {
        let currentItem = instructions[index];
        if (typeof currentItem === 'number') {
            resultArr.push(currentItem);
        } else {
            switch (currentItem) {
                case '+':
                    operand1 = resultArr.pop();
                    operand2 = resultArr.pop();
                    resultArr.push(operand2 + operand1);
                    break;

                case '-':
                    operand1 = resultArr.pop();
                    operand2 = resultArr.pop();
                    resultArr.push(operand2 - operand1);
                    break;

                case '*':
                    operand1 = resultArr.pop();
                    operand2 = resultArr.pop();
                    resultArr.push(operand2 * operand1);
                    break;

                case '/':
                    operand1 = resultArr.pop();
                    operand2 = resultArr.pop();
                    resultArr.push(operand2 / operand1);
                    break;
            }
        }
        index++;
    }

    if (typeof operand1 !== 'number' || typeof operand2 !== 'number') {
        console.log(`Error: not enough operands!`);
    } else {
        if (resultArr.length > 1) {
            console.log(`Error: too many operands!`);
        } else {
            console.log(resultArr.join(' '));
        }
    }
}

// jansNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);

// jansNotation([5, 3, 4, '*', '-']);

// jansNotation([15, '/']);

jansNotation([3, 4, '+']);
