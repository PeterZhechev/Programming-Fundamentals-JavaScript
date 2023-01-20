function oddAndEvenSum(num) {

    let currentNum = 0;
    let oddSum = 0;
    let evenSum = 0;
    let text = num.toString();
    let numLength = text.length;

    for (let i = 0; i < numLength; i++) {
        currentNum = Number(text[i]);
        if (currentNum % 2 !== 0) {
            oddSum += currentNum;
        } else if (currentNum % 2 === 0) {
            evenSum += currentNum;
        }
    }

    return (`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

let result = oddAndEvenSum(3495892137259234);

console.log(result);