function magicSum(arr, magicNumber) {

    let arrLength = arr.length;
    let firstNum = [];
    let secondNum = [];
    let outputArr = [];

    for (let i = 0; i < arrLength; i++) {
        firstNum = Number(arr[i]);
        for (let j = 1; j < arrLength; j++) {
            secondNum = Number(arr[j + i]);
            if (firstNum + secondNum === magicNumber) {
                outputArr.push(firstNum, secondNum);
                console.log(outputArr.join(' '));
                outputArr = [];
            }
        }
    }
}

magicSum([1, 2, 3, 4, 5, 6], 6);