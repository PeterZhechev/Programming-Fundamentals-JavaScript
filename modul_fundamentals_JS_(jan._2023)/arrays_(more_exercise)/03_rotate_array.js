function rotateArray(arr) {

    let numberOfRotations = 0;
    let newArr = [];
    let outputArr = [];
    let count = 0;
    let countTwo = 0;
    let currentElement = '';
    let numberOfPosition = 0;
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            numberOfRotations = Number(arr[i]);
        }
    }

    for (let j = 0; j < arr.length - 1; j++) {
        newArr.push(arr[j]);
    }

    for (let k = 1; k <= numberOfRotations; k++) {
        count++;
        if (k % newArr.length === 0) {
            count = 0;
        }
    }

    numberOfPosition = newArr.length - count;

    while (true) {
        if ((index + numberOfPosition) < newArr.length) {
            currentElement = newArr[index + numberOfPosition];
            outputArr.push(currentElement);
        } else {
            currentElement = newArr[countTwo];
            outputArr.push(currentElement);
            countTwo++;
        }
        if (outputArr.length === newArr.length) {
            break;
        }
        index++
    }

    console.log(outputArr.join(' '));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);