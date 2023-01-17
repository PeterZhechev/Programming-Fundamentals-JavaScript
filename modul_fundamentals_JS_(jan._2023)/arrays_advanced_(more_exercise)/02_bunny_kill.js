function bunnyKill(input) {

    let coordinatesRaw = input.pop().split(' '); // row, column
    let bunniesWithBombsCount = coordinatesRaw.length;
    let index = 0;
    let matrix = [];

    for (let i = 0; i < input.length; i++) {
        let currentLine = input[i];
        currentLine = currentLine
            .split(' ')
            .map(Number);
        matrix.push(currentLine);
    }

    let coordinates = [];

    for (let j = 0; j < coordinatesRaw.length; j++) {
        let currentCoordinate = coordinatesRaw[j]
            .split(',')
            .map(Number);
        coordinates.push(currentCoordinate);
    }


    let snowballDamage = 0;
    let bunniesKilledBySnowball = 0;
    let currentBunnieWithBomb = 0;
    let currentCoordinate = [];
    let currentRow = 0;
    let currentColumn = 0;

    while (index < bunniesWithBombsCount) {
        currentCoordinate = coordinates[index];
        currentRow = currentCoordinate[0];
        currentColumn = currentCoordinate[1];
        currentBunnieWithBomb = matrix[currentRow][currentColumn];

        let currentDamagedByBombBunnie = 0;
        // Up / right => down (1)
        let upCount = 0;
        for (let k = 0; k < 2; k++) {

            let upCurrentIndexRow = 0;
            if (currentRow === 0) {
                upCurrentIndexRow = 0;
                upCount++;
            } else {
                upCurrentIndexRow = currentRow - 1;
            }

            let upCurrentIndexColumn = 0;
            if (currentColumn === matrix[currentRow].length - 1) {
                break;
            } else {
                upCurrentIndexColumn = currentColumn + 1;
            }

            currentDamagedByBombBunnie = matrix[upCurrentIndexRow + k][upCurrentIndexColumn];
            if (currentDamagedByBombBunnie - currentBunnieWithBomb < 0) {
                currentDamagedByBombBunnie = 0;
            } else {
                currentDamagedByBombBunnie = matrix[upCurrentIndexRow + k][upCurrentIndexColumn] - currentBunnieWithBomb;
            }

            matrix[upCurrentIndexRow + k][upCurrentIndexColumn] = currentDamagedByBombBunnie;
            if (upCount === 1) {
                break;
            }
        }

        upCount = 0;
        currentDamagedByBombBunnie = 0;
        // Right / down => left (2)
        let rightCount = 0;
        for (let l = 0; l < 2; l++) {

            let rightCurrentIndexRow = 0;
            if (currentRow === matrix.length - 1) {
                break;
            } else {
                rightCurrentIndexRow = currentRow + 1;
            }

            let rightCurrentIndexColumn = 0;
            if (currentColumn === matrix[currentRow].length - 1) {
                rightCurrentIndexColumn = matrix[currentRow].length - 1;
                rightCount++;
            } else {
                rightCurrentIndexColumn = currentColumn + 1;
            }

            currentDamagedByBombBunnie = matrix[rightCurrentIndexRow][rightCurrentIndexColumn - l];
            if (currentDamagedByBombBunnie - currentBunnieWithBomb < 0) {
                currentDamagedByBombBunnie = 0;
            } else {
                currentDamagedByBombBunnie = matrix[rightCurrentIndexRow][rightCurrentIndexColumn - l] - currentBunnieWithBomb;
            }

            matrix[rightCurrentIndexRow][rightCurrentIndexColumn - l] = currentDamagedByBombBunnie;
            if (rightCount === 1) {
                break;
            }
        }

        rightCount = 0;
        currentDamagedByBombBunnie = 0;
        // Down / left => up (3)
        let downCount = 0;
        for (let m = 0; m < 2; m++) {

            let downCurrentIndexColumn = 0;
            if (currentColumn === 0) {
                break;
            } else {
                downCurrentIndexColumn = currentColumn - 1;
            }

            let downCurrentIndexRow = 0;
            if (currentRow === matrix.length - 1) {
                downCurrentIndexRow = matrix.length - 1;
                rightCount++;
            } else {
                downCurrentIndexRow = currentRow + 1;
            }

            currentDamagedByBombBunnie = matrix[downCurrentIndexRow - m][downCurrentIndexColumn] - currentBunnieWithBomb;
            if (currentDamagedByBombBunnie < 0) {
                currentDamagedByBombBunnie = 0;
            }

            matrix[downCurrentIndexRow - m][downCurrentIndexColumn] = currentDamagedByBombBunnie;
            if (rightCount === 1) {
                break;
            }
        }

        downCount = 0;
        currentDamagedByBombBunnie = 0;
        // Left / up => right (4)
        let leftCount = 0;
        for (let n = 0; n < 2; n++) {

            let downCurrentIndexRow = 0;
            if (currentRow === 0) {
                break;
            } else {
                downCurrentIndexRow = currentRow - 1;
            }

            let downCurrentIndexColumn = 0;
            if (currentColumn === 0) {
                downCurrentIndexColumn = currentColumn;
                leftCount++;
            } else {
                downCurrentIndexColumn = currentColumn - 1;
            }

            currentDamagedByBombBunnie = matrix[downCurrentIndexRow][downCurrentIndexColumn + n] - currentBunnieWithBomb;
            if (currentDamagedByBombBunnie < 0) {
                currentDamagedByBombBunnie = 0;
            }

            matrix[downCurrentIndexRow][downCurrentIndexColumn + n] = currentDamagedByBombBunnie;
            if (leftCount === 1) {
                break;
            }
        }

        leftCount = 0;
        currentDamagedByBombBunnie = 0;

        snowballDamage += matrix[currentRow][currentColumn];
        if (matrix[currentRow][currentColumn] !== 0) {
            bunniesKilledBySnowball++;
        }

        matrix[currentRow][currentColumn] = 0;
        index++;
    }

    for (let o = 0; o < matrix.length; o++) {
        let finalCurrentRow = matrix[o];
        for (let p = 0; p < finalCurrentRow.length; p++) {
            let finalCurrentNum = finalCurrentRow[p];
            if (finalCurrentNum > 0) {
                bunniesKilledBySnowball++;
            }
            snowballDamage += finalCurrentNum;
        }
    }

    console.log(snowballDamage);
    console.log(bunniesKilledBySnowball);
}

// bunnyKill([
//     '5 10 15 20',
//     '10 10 10 10',
//     '10 15 10 10',
//     '10 10 10 10',
//     '2,2 0,1'
// ]);

bunnyKill([
    '10 10 10',
    '10 10 10',
    '10 10 10',
    '1,1 0,2'
]);