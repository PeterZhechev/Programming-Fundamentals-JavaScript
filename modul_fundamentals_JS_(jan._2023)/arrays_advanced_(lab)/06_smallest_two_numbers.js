function smallestTwoNumbers(arr) {

    let arrLength = arr.length;
    let smallestNum = Number.MAX_SAFE_INTEGER;
    let index = 0;
    let newArr = [];
    let restOfArr = [];

    while (index < arrLength) {
        for (let i = 0; i < arr.length; i++) {
            let currentNum = arr[i];
            if (currentNum < smallestNum) {
                smallestNum = currentNum;
            }
        }
        newArr.push(smallestNum);
        restOfArr = [];

        for (let j = 0; j < arr.length; j++) {
            let currentNum = arr[j];
            if (currentNum !== smallestNum) {
                restOfArr.push(currentNum);
            }
        }

        arr = restOfArr;
        smallestNum = Number.MAX_SAFE_INTEGER;
        index++;
    }

    console.log(newArr.slice(0, 2).join(' '));
}

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);