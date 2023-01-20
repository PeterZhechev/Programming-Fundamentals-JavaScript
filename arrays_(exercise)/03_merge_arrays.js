function mergeArrays(arr1, arr2) {

    let firstTempElement = '';
    let secontTempElement = '';
    let output = [];
    let arrayLength = arr1.length;


    for (let i = 0; i < arrayLength; i++) {
        firstTempElement = arr1[i];
        secontTempElement = arr2[i];

        if (i % 2 === 0) {
            output.push(Number(firstTempElement) + Number(secontTempElement));
        } else {
            output.push(firstTempElement + secontTempElement);
        }

    }

    console.log(output.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);