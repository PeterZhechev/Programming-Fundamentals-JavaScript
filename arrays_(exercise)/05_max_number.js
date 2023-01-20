function maxNumber(arr) {

    let arrLength = arr.length;
    let output = [];
    let isBigger = true;

    for (let i = 0; i < arrLength; i++) {
        let currentNum = arr.shift();
        for (let j = 0; j <= arr.length; j++) {
            let nextNum = arr[j];
            isBigger = true;
            if (currentNum <= nextNum) {
                isBigger = false;
                break;
            }
        }

        if (isBigger) {
            output.push(currentNum);
        }
    }

    console.log(output.join(' '));
}

// maxNumber([14, 24, 3, 19, 15, 17]);

// maxNumber([41, 41, 34, 20]);

maxNumber([27, 19, 42, 2, 13, 45, 48]);