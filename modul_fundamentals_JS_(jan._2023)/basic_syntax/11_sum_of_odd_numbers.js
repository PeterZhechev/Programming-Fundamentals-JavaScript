function numbers(num) {

    let sum = 0;
    let plusNum = 1;
    let i = 1;

    while(num >= i) {

        console.log(plusNum);
        sum += plusNum;
        plusNum += 2;
        i++;

    }
    console.log(`Sum: ${sum}`);
}

numbers(3);