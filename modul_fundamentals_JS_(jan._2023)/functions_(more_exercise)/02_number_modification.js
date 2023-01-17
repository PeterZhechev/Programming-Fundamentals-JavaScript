function numberModification(number) {

    let numToString = number.toString();
    let numInArr = [];
    numInArr = numToString.split('');
    let numInArrLength = numInArr.length;
    let count = 0;
    let sum = 0;
    while (count < numInArrLength) {
        let currentNumber = numInArr[count];
        sum += Number(currentNumber);
        count++;
        if (count === numInArrLength) {
            if (sum / count < 5) {
                numInArr.push('9');
                count = 0;
                sum = 0;
                numInArrLength = numInArr.length;
            } else {
                console.log(numInArr.join(''));
            }
        }
    }
}

numberModification(5835);