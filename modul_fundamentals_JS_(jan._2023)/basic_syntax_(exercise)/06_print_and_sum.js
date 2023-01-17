function printAndSum(start, end) {

    let stringNumbers = "";
    let sum = 0;

    for (let i = start; i <= end; i++) {
        stringNumbers += (`${i} `);
        sum += i;
    }
    console.log(stringNumbers);
    console.log(`Sum: ${sum}`);
}

printAndSum(50, 60);