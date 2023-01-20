function reverseInPlace(inputArr) {

    let i = 0;
    let arrLength = inputArr.length;
    let output = '';
    let tempArr = [];

    while (i < arrLength) {
        tempArr = inputArr[inputArr.length - 1 - i];
        i++;
        if (i < arrLength) {
            output += tempArr + ' ';
        } else {
            output += tempArr;
        }
    }

    console.log(output);
}

reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);