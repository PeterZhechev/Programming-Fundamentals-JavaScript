function maxSequence(arr) {

    let index = 0;

    let arrLength = arr.length;
    let firstCounter = [];
    let secondCounter = [];
    let thirdCounter = [];

    let count = 1;
    let temp = 0;
    let biggest = 0;
    let biggestTwo = 0;
    let tempOutput = [];
    let finalOutput = [];

    let a = [];
    let tempTwo = 0;
    let needElement = 0;
    let countTwo = 0;

    while (index < arrLength) {

        firstCounter = arr[index];
        secondCounter = arr[index + 1];
        thirdCounter = arr[index - 1];
        index++;

        if (temp === firstCounter) {
            count++;
        } else {
            count = 1;
        }

        if (firstCounter === secondCounter || firstCounter === thirdCounter) {
            tempOutput.push(firstCounter)
            temp = firstCounter;
        }

        if (count > biggest) {
            biggest = count;
        }
    }

    for (let j = 0; j < tempOutput.length; j++) {
        a = tempOutput[j];

        if (a === tempTwo) {
            countTwo++;
        } else {
            countTwo = 0;
        }

        if (countTwo > biggestTwo) {
            biggestTwo = countTwo;
            needElement = a;
        }
        tempTwo = a;
    }

    for (let i = 0; i < biggest; i++) {
        finalOutput.push(needElement);
    }

    console.log(finalOutput.join(' '));

}

maxSequence([0, 1, 8, 8, 5, 2, 2, 6, 3, 3]);