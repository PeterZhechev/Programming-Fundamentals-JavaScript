function orbit(arr) {

    let width = Number(arr[0]);
    let height = Number(arr[1]);
    let x = Number(arr[2]);
    let y = Number(arr[3]);
    let newArr = [];
    let isBigger = 0;
    let sum = 0;
    let center = 0;

    if (width > height) {
        isBigger = width;
    } else if (width <= height) {
        isBigger = height;
    }

    sum = isBigger * 2;

    if (sum % 2 === 0) {
        sum -= 1;
    }

    for (let i = 0; i < sum; i++) {
        newArr[i] = [];
        for (let j = 0; j < sum; j++) {
            newArr[i][j] = [];
        }
    }

    center = Math.floor(sum / 2);
    newArr[center][center] = 1;

    let downIncrease = 2;
    let rightMax = center + 1;

    let leftIncrease = 2;
    let downMax = center + 1;

    let upIncrease = 2;
    let leftMin = center - 1;

    let rightIncrease = 2;
    let upMin = center - 1;

    let insideCounter = center;

    let count = 2;
    let countUp = center;
    let countDonw = center;

    while (count <= isBigger) {

        insideCounter = countDonw;

        for (let k = 0; k < downIncrease; k++) { // down > right
            newArr[insideCounter][rightMax] = count;
            insideCounter++;
        }
        insideCounter = countUp;
        downIncrease += 2;
        rightMax++;

        for (let l = 0; l < leftIncrease; l++) { // left > down
            newArr[downMax][insideCounter] = count;
            insideCounter--;
        }
        insideCounter = countUp;
        leftIncrease += 2;
        downMax++;

        for (let m = 0; m < upIncrease; m++) { // up > left
            newArr[insideCounter][leftMin] = count;
            insideCounter--;
        }
        insideCounter = countDonw;
        leftMin--;
        upIncrease += 2;

        for (let n = 0; n < rightIncrease; n++) { // right > up
            newArr[upMin][insideCounter] = count;
            insideCounter++;
        }
        countUp++;
        countDonw--;
        upMin--;
        rightIncrease += 2;
        count++;
    }

    let outputArr = [];

    for (let i = 0; i < height; i++) {
        outputArr[i] = [];
        for (let j = 0; j < width; j++) {
            outputArr[i][j] = [];
        }
    }

    let startX = center - x;
    let startY = center - y;

    for (let i = 0; i < height; i++) {
        outputArr[i] = newArr[startX];
        startX++;
    }

    let finalOutputArr = [];

    for (let i = 0; i < height; i++) {
        finalOutputArr[i] = [];
        for (let j = 0; j < width; j++) {
            finalOutputArr[i][j] = [];
        }
    }

    for (let i = 0; i < height; i++) {
        startY = center - y;
        for (let j = 0; j < width; j++) {
            finalOutputArr[i][j] = outputArr[i][startY];
            startY++;
        }
    }

    let outputCurrentArr = [];

    for (let i = 0; i < finalOutputArr.length; i++) {
        outputCurrentArr = finalOutputArr[i];
        console.log(outputCurrentArr.join(' '));

    }

}

orbit([10, 10, 5, 7]);