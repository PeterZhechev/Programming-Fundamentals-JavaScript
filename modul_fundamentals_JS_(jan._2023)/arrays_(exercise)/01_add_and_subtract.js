function solve(arr) {

    let newArr = [];
    let sumOfOriginalArr = 0;
    let sumOfModifiedArr = 0;
    let tempCount = 0;

    let tempEven = 0;
    let tempOdd = 0;


    for (let i = 0; i < arr.length; i++) {

        tempCount = Number(arr[i]);
        sumOfOriginalArr += tempCount;

        if (tempCount % 2 === 0) {
            tempEven = tempCount + i;
            newArr.push(tempEven);
            sumOfModifiedArr += tempEven;
        } else {
            tempOdd = tempCount - i;
            newArr.push(tempOdd);
            sumOfModifiedArr += tempOdd;
        }

    }

    console.log(newArr);
    console.log(sumOfOriginalArr);
    console.log(sumOfModifiedArr);
}

solve([-5, 11, 3, 0, 2]);