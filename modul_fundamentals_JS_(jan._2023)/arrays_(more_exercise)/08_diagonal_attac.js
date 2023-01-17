function diagonalAttac(arr) {

    let arrLength = arr.length;
    let currentString = '';
    let currentArr = [];
    let newArr = [];
    let newMatrix = [];
    let currentArrForNewMatrix = [];
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let isEvenDiagonalsSum = false;
    let count = 0;

    for (let i = 0; i < arrLength; i++) {
        newArr[i] = [];
        newMatrix[i] = [];
    }

    for (let i = 0; i < arrLength; i++) {
        currentString = arr[i];
        currentArr = currentString.split(' ');
        for (let j = 0; j < currentArr.length; j++) {
            newArr[i][j] = Number(currentArr[j]);
        }

    }

    for (let i = 0; i < newArr.length; i++) {
        currentArrForNewMatrix = newArr[i];
        firstDiagonal += Number(currentArrForNewMatrix[i]);
    }

    for (let i = newArr.length; i > 0; i--) {
        currentArrForNewMatrix = newArr[i - 1];
        secondDiagonal += Number(currentArrForNewMatrix[count]);
        count++;
    }

    if (firstDiagonal === secondDiagonal) {
        isEvenDiagonalsSum = true;
    } else {
        isEvenDiagonalsSum = false;
    }

    if (isEvenDiagonalsSum) {
        for (let i = 0; i < newArr.length; i++) {
            let currentArr = newArr[i];
            for (let j = 0; j < currentArr.length; j++) {
                newMatrix[i][j] = Number(firstDiagonal);
            }
        }
        for (let i = 0; i < newArr.length; i++) {
            currentArrForNewMatrix = newArr[i];
            newMatrix[i][i] = Number(currentArrForNewMatrix[i]);
        }

        count = 0;

        for (let i = newArr.length; i > 0; i--) {
            currentArrForNewMatrix = newArr[i - 1];
            newMatrix[i - 1][count] = Number(currentArrForNewMatrix[count]);
            count++;
        }

        for (let i = 0; i < newMatrix.length; i++) {
            console.log(newMatrix[i].join(' '));
        }
    } else {
        for (let i = 0; i < newArr.length; i++) {
            console.log(newArr[i].join(' '));
        }
    }

}

diagonalAttac(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);