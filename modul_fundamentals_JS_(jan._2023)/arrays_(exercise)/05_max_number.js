function maxNumber(arr) {

    let outputArr = [];
    let firstTempElement = 0;
    let secondTempElement = 0;
    let count = 0;
    let downCount = arr.length;

    for (let i = 0; i < arr.length; i++) {
        firstTempElement = arr[i];
        downCount -= 1;
        for (let j = 0; j < arr.length; j++) {
            secondTempElement = arr[j];

            if (firstTempElement > secondTempElement) {
                count++;

                if (count >= arr.length - 1) {

                    outputArr.push(firstTempElement);
                    count = 0;
                    break;
                }
            }
        }
    }
    console.log(outputArr.join(' '));
}

maxNumber([27, 19, 42, 2, 13, 45, 48]);