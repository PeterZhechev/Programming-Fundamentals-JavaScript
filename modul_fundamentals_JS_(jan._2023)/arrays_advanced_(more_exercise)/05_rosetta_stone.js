function rosettaStone(arr) {

    let numberN = arr.shift().split(' ').map(Number);
    let rowsInTheDecodingTemplateMatrix = [];
    let encodedMessageMatrix = [];
    let overlay = '';
    let stepX = 0;
    let stepY = 0;
    let elementsInMatrix = 0;

    let wheelOfLetters = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (let i = 1; i <= numberN; i++) {                        // Taking template matrix.
        let currentRow = arr.shift().split(' ').map(Number);
        rowsInTheDecodingTemplateMatrix.push(currentRow);
    }

    let messageLength = arr.length;                                     // Taking encoded matrix.
    for (let j = 0; j < messageLength; j++) {
        let currentRow = arr.shift().split(' ').map(x => Number(x));
        encodedMessageMatrix.push(currentRow);
    }

    let lengthOfMatrix = 0;

    for (let i = 0; i < encodedMessageMatrix.length; i++) {  // Calculate elements in matrix.
        let currentRow = encodedMessageMatrix[i];
        for (let j = 0; j < currentRow.length; j++) {
            elementsInMatrix++;
            if (j < 1) {
                lengthOfMatrix++;
            }
        }
    }

    let x = rowsInTheDecodingTemplateMatrix[0].length;
    let y = rowsInTheDecodingTemplateMatrix.length;

    let count = 0;


    while (count <= elementsInMatrix) {

        for (let i = 0; i < y; i++) {
            let row = rowsInTheDecodingTemplateMatrix[i];
            for (let j = 0; j < x; j++) {
                let currentNum = row[j];
                if (i + stepY < encodedMessageMatrix.length) {
                    encodedMessageMatrix[i + stepY][j + stepX] += currentNum;
                }
            }
        }

        stepX += x;
        if (stepX >= lengthOfMatrix) {
            stepX = 0;
            stepY += y;
        }

        count++;
    }

    for (let i = 0; i < encodedMessageMatrix.length; i++) {
        let currentRow = encodedMessageMatrix[i];
        for (let j = 0; j < currentRow.length; j++) {
            let currentNum = currentRow[j];
            if (currentNum > Number.MIN_SAFE_INTEGER) {
                overlay += wheelOfLetters[(currentNum % 27)];
            }
        }
    }

    console.log(overlay.trim());
}

rosettaStone();