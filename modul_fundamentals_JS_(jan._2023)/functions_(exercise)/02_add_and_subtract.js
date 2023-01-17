function addAndSubtract(num1, num2, num3) {

    let firstSum = sum();
    let secondSum = subtract();

    function sum() {
        let sumOfFirsTwoNumbers = num1 + num2;
        return sumOfFirsTwoNumbers;
    }

    function subtract() {
        let subtractedSum = firstSum - num3;
        return subtractedSum;
    }

    return secondSum;
}

let output = addAndSubtract(1,
    17,
    30
);

console.log(output);