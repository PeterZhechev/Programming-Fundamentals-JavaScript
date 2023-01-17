function biggestOfThreeNumbers(num1, num2, num3) {

    let biggestNum = 0;

    if (num1 > num2 && num1 > num3) {
        biggestNum = num1;
    } else if (num2 > num1 && num2 > num3) {
        biggestNum = num2;
    } else if (num3 > num1 && num3 > num2) {
        biggestNum = num3;
    } else if (num1 === num2 && num3 > num1) {
        biggestNum = num3;
    } else if (num1 === num2 && num3 < num1) {
        biggestNum = num1;
    } else if (num1 === num3 && num2 > num1) {
        biggestNum = num2;
    } else if (num1 === num3 && num2 < num1) {
        biggestNum = num1;
    } else if (num2 === num3 && num1 < num2) {
        biggestNum = num2;
    } else if (num2 === num3 && num1 > num2) {
        biggestNum = num1;
    } else if (num1 === num2 && num1 === num3) {
        biggestNum = num1;
    }

    console.log(biggestNum);
}

biggestOfThreeNumbers(3.334, 3.3, 3.3);