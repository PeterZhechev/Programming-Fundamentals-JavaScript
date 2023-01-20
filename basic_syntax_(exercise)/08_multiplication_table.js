function table(inputNumber) {

    let sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum = i * inputNumber;
        let total = (`${inputNumber} X ${i} = ${i * inputNumber}`)
        console.log(total);
    }

}

table(3);