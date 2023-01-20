function amazingNumbers(input) {

    let inputNum = '' + (input);
    let sum = 0;
    let result = '';

    for (let i = 0; i < inputNum.length; i++) {
        sum += Number(inputNum[i]);
    }

    if (sum % 10 === 9) {
        result = 'True';
    } else {
        result = 'False';
    }
    console.log(`${input} Amazing? ${result}`);
}

amazingNumbers(999);