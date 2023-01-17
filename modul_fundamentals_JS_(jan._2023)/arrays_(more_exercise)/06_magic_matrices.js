function solve(arr) {

    let isEven = false;
    let isEvenCount = false;
    let isEvenNumbers = false;
    let arrLenghth = arr.length;
    let currentArr = [];
    let digitCounter = 0;
    let digitsInArr = [];
    let numInArr = [];
    let arrSumAfter = [];
    let currentArrAfterNums = 0;
    let currenArrSumAfter = 0;
    let currentColumnNum = 0;
    let columnSum = 0;
    let finalArr = [];

    for (let i = 0; i < arrLenghth; i++) {
        currentArr = arr[i];
        for (let j = 0; j < currentArr.length; j++) {
            digitCounter++;
            if (j === currentArr.length - 1) {
                digitsInArr.push(digitCounter);
                digitCounter = 0;
            }
        }
    }

    for (let k = 0; k < digitsInArr.length; k++) {
        let currentNum = digitsInArr[k];
        numInArr.push(currentNum);
        if (numInArr[0] !== currentNum) {
            isEvenCount = false;
            break;
        } else {
            isEvenCount = true;
        }
    }

    for (let l = 0; l < arrLenghth; l++) {
        let currentArrAfter = arr[l];
        currenArrSumAfter = 0;
        for (let m = 0; m < currentArrAfter.length; m++) {
            currentArrAfterNums = currentArrAfter[m];
            currenArrSumAfter += currentArrAfterNums;
            if (m === currentArrAfter.length - 1) {
                arrSumAfter.push(currenArrSumAfter);
            }
        }
    }

    let count = 0;
    let n = 0;
    let currentArrColumn = [];

    while (true) {
        currentArrColumn = arr[n];
        if (count === currentArrColumn.length) {
            break;
        }
        for (let o = count; o < count + 1; o++) {
            currentColumnNum = currentArrColumn[o];
            columnSum += currentColumnNum;
            if (n === arrLenghth - 1) {
                arrSumAfter.push(columnSum);
                columnSum = 0;
                count++;
                n = 0;
                break;
            }
            n++;
        }
    }

    for (let p = 0; p < arrSumAfter.length; p++) {
        let currentNumForTotalSum = arrSumAfter[p];
        finalArr.push(currentNumForTotalSum);
        if (finalArr[0] !== currentNumForTotalSum) {
            isEvenNumbers = false;
            break;
        } else {
            isEvenNumbers = true;
        }
    }

    if (isEvenCount === true && isEvenNumbers === true) {
        isEven = true;
        console.log(isEven);
    } else {
        console.log(isEven);
    }

}

solve([
    [4, 7, 5, 5],
    [5, 4, 7, 5],
    [5, 5, 4, 7],
    [7, 5, 5, 4]
]);