function smallestNum(num1, num2, num3) {

    let smallestNumber = 0;

    if (num1 < num2 && num1 < num3) {
        smallestNumber = num1;
    } else if (num2 < num1 && num2 < num3) {
        smallestNumber = num2;
    } else if (num3 < num1 && num3 < num2) {
        smallestNumber = num3;
    } else if (num1 === num2 && num3 < num1) {
        smallestNumber = num3;
    } else if (num1 === num2 && num1 < num3) {
        smallestNumber = num1;
    } else if (num1 === num3 && num2 < num1) {
        smallestNumber = num2;
    } else if (num1 === num3 && num1 < num2) {
        smallestNumber = num1;
    } else if (num2 === num3 && num1 < num2) {
        smallestNumber = num1;
    } else if (num2 === num3 && num2 < num1) {
        smallestNumber = num2;
    } else if (num1 === num2 && num1 === num3) {
        smallestNumber = num1;
    }

    return smallestNumber;
}

let outputOfSmallestNum = smallestNum(0, 0, 1);

console.log(outputOfSmallestNum);