function negativeOrPositiveNumbers(arr) {

    let outputArr = [];
    let arrLength = arr.length;
    let index = 0;

    while (index < arrLength) {
        let currentElement = arr[index];

        if (currentElement < 0) {
            outputArr.unshift(arr[index]);
        } else {
            outputArr.push(arr[index]);
        }

        index++;
    }

    return outputArr.join('\n');
}

let result = negativeOrPositiveNumbers(['3', '-2', '0', '-1']);

console.log(result);