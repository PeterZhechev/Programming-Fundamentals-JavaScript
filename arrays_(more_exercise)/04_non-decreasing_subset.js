function nonDecreasingSubset(arr) {
    
    let arrLength = arr.length;
    let currentElement = 0;
    let biggestElement = 0;
    let outputArr = [];


    for (let i = 0; i < arrLength; i++) {
        currentElement = arr[i];
        if (currentElement >= biggestElement) {
            biggestElement = currentElement;
            outputArr.push(biggestElement);
        }
    }
    console.log(outputArr.join(' '));
}

nonDecreasingSubset([ 1, 2, 3, 4]);