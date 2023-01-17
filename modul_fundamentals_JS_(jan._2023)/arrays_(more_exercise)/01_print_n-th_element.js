function print(arr) {

    let arrLength = arr.length;
    let currentElement = '';
    let outputElement = '';
    let outputArr = [];
    let step = 0;
    

    for (let i = 0; i < arrLength; i++) {
        currentElement = arr[i];
        if (i === arrLength - 1) {
            step = Number(currentElement);
        }
    }

    for (let j = 0; j < arrLength - 1; j++) {
        outputElement = arr[j];

        if (j === 0 || j % step === 0) {
            outputArr.push(outputElement);
        }
    }
    console.log(outputArr.join(' '));
}

print(['5', '20', '31', '4', '20', '2']);