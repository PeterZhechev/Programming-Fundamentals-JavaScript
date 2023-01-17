function equalSums(arr) {

    let arrLength = arr.length;
    let currentLeftElement = 0;
    let currentRightElement = 0;
    let leftElements = 0;
    let rightElements = 0;
    let isMiddleNumber = false;


    for (let i = 0; i < arrLength; i++) {
        currentLeftElement = arr[i];
        leftElements += currentLeftElement;
        rightElements = 0;
        for (let j = 1; j < arrLength - i - 1; j++) {
            currentRightElement = arr[(j + i) + 1];
            rightElements += currentRightElement;
            if (leftElements === rightElements) {
                console.log(i + 1);
                isMiddleNumber = true;
            }
        }
    }
    if (arrLength < 2) {
        console.log('0');
    } else if (isMiddleNumber === false) {
        console.log('no');
    }

}

equalSums([1, 2, 3, 3]);