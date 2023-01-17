function solve(input) {

    let arrLength = input.length;
    let tempNum = 0;
    let evenSum = 0;
    let oddSum = 0;
    let finalSum = 0;

    for (let i = 0; i < arrLength; i++) {
        tempNum = Number(input[i]);
        if (tempNum % 2 === 0) {
            evenSum += tempNum;
        } else if (tempNum % 2 !== 0) {
            oddSum += tempNum;
        }
        finalSum = evenSum - oddSum;
    }
    console.log(finalSum);
}

solve([2, 4, 6, 8, 10]);