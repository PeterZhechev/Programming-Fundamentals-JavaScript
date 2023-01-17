function signCheck(numOne, numTwo, numThree) {

    function numOneMultiplyByNumTwo() {
        let sumOfNumOneMultiplyByNumTwo = numOne * numTwo;
        return sumOfNumOneMultiplyByNumTwo;
    }

    let firstResult = numOneMultiplyByNumTwo();

    function finalSum() {
        let result = firstResult * numThree;
        return result;
    }

    let outputResult = finalSum();
    if (outputResult < 0) {
        return 'Negative';
    } else {
        return 'Positive';
    }
}

let positiveOrNegative = signCheck(
    2,
    -2,
    1   
);

console.log(positiveOrNegative);