function spiralMatrix(x, y) {

    let arr = [];
    let count = 1;
    let maxNum = x * y;

    for (let i = 0; i < y; i++) {
        arr[i] = [];
    }

    let xUpRight = x - 1;
    let yRightDown = y - 1;
    let xDownLeft = x - 1;
    let yLeftUp = y - 1;

    let UpRightIncr = 0;
    let RightDownDec = x - 1;
    let DownLeftDec = y - 1;
    let LeftUpIncr = 0;

    let UpRightIncrMov = 0;
    let RightDownMov = 0;
    let DownLeftMov = x - 1;
    let LeftUpMov = y - 1;

    let countUpRight = 0;
    let countRightDown = 0;
    let countDownLeft = x - 1;
    let countLeftUp = y - 1;

    while (count <= maxNum) {

        if (count === maxNum) {
            xUpRight++;
        }
        UpRightIncrMov = countUpRight;
        for (let i = 0; i < xUpRight; i++) { // up => right
            if (count <= maxNum) {
                arr[UpRightIncr][UpRightIncrMov] = count;
                UpRightIncrMov++;
                count++;
            }
        }
        countUpRight++;
        xUpRight -= 2;
        UpRightIncr++;

        if (count === maxNum) {
            yRightDown++;
        }
        RightDownMov = countRightDown;
        for (let i = 0; i < yRightDown; i++) { // right => down
            if (count <= maxNum) {
                arr[RightDownMov][RightDownDec] = count;
                RightDownMov++;
                count++;
            }
        }
        countRightDown++;
        yRightDown -= 2;
        RightDownDec--;

        if (count === maxNum) {
            xDownLeft++;
        }
        DownLeftMov = countDownLeft;
        for (let i = 0; i < xDownLeft; i++) { // down => left
            if (count <= maxNum) {
                arr[DownLeftDec][DownLeftMov] = count;
                DownLeftMov--;
                count++;
            }
        }
        countDownLeft--;
        xDownLeft -= 2;
        DownLeftDec--;

        if (count === maxNum) {
            yLeftUp++;
        }
        LeftUpMov = countLeftUp;
        for (let i = 0; i < yLeftUp; i++) { // left => up
            if (count <= maxNum) {
                arr[LeftUpMov][LeftUpIncr] = count;
                LeftUpMov--;
                count++;
            }
        }
        countLeftUp--;
        yLeftUp -= 2;
        LeftUpIncr++;
    }

    let currentArr = [];
    for (let i = 0; i < arr.length; i++) {
        currentArr = arr[i];
        console.log(currentArr.join(' '));
    }

}

spiralMatrix(8, 8);