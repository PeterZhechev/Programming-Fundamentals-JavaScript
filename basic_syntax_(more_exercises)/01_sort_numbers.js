function sortNumbers(num1, num2, num3) {

    let biggestNumber = 0;
    let secondBiggestNumber = 0;
    let smallestNumber = 0;

    if (num1 > num2 && num1 > num3 && num2 > num3) {
        biggestNumber = num1;
        secondBiggestNumber = num2;
        smallestNumber = num3;
    }

    if (num1 > num2 && num1 > num3 && num3 > num2) {
        biggestNumber = num1;
        secondBiggestNumber = num3;
        smallestNumber = num2;
    }


    if (num2 > num1 && num2 > num3 && num1 > num3) {
        biggestNumber = num2;
        secondBiggestNumber = num1;
        smallestNumber = num3;
    }

    if (num2 > num1 && num2 > num3 && num3 > num1) {
        biggestNumber = num2;
        secondBiggestNumber = num3;
        smallestNumber = num1;
    }

    if (num3 > num1 && num3 > num2 && num2 > num1) {
        biggestNumber = num3;
        secondBiggestNumber = num2;
        smallestNumber = num1;
    }

    if (num3 > num1 && num3 > num2 && num1 > num2) {
        biggestNumber = num3;
        secondBiggestNumber = num1;
        smallestNumber = num2;
    }




    if (num1 === num2 && num1 > num3) {
        biggestNumber = num1;
        secondBiggestNumber = num2;
        smallestNumber = num3;
    }

    if (num1 === num2 && num3 > num1) {
        biggestNumber = num3;
        secondBiggestNumber = num1;
        smallestNumber = num2;
    }


    if (num1 === num3 && num2 > num1) {
        biggestNumber = num2;
        secondBiggestNumber = num1;
        smallestNumber = num3;
    }

    if (num1 === num3 && num2 < num1) {
        biggestNumber = num1;
        secondBiggestNumber = num3;
        smallestNumber = num2;
    }

    if (num2 === num3 && num1 > num2) {
        biggestNumber = num1;
        secondBiggestNumber = num2;
        smallestNumber = num3;
    }

    if (num2 === num3 && num1 < num2) {
        biggestNumber = num2;
        secondBiggestNumber = num3;
        smallestNumber = num1;
    }

    if (num1 === num2 && num1 === num3) {
        biggestNumber = num1;
        secondBiggestNumber = num2;
        smallestNumber = num3;
    }


    console.log(biggestNumber);
    console.log(secondBiggestNumber);
    console.log(smallestNumber);

}

sortNumbers(-10, -9.999, -9.99);