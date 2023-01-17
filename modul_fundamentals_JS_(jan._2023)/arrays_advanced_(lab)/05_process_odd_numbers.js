function processOddNumbers(arr) {
    
    let index = 0;
    const arrLength = arr.length;
    let output = [];

    while (index < arrLength) {
        let currentNum = arr[index];
        if (index % 2 !== 0) {
            output.unshift(currentNum * 2);
        }

        index++;
    }

    console.log(output.join(' '));
}

processOddNumbers([10, 15, 20, 25]);