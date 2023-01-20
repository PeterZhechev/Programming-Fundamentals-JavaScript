function firstAndLastKNumbers(arr) {

    let k = arr[0];
    let outputArr = arr;
    outputArr.shift();
    let left = outputArr.length - k;

    console.log(outputArr.slice(0, k).join(' '));
    console.log(outputArr.slice(left).join(' '));
}

firstAndLastKNumbers([5, 6, 7, 8, 9, 4, 5, 7, 2, 1, 2, 3]);