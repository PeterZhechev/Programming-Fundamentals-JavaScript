function equalArrays(arr1, arr2) {

    let currentArrNum1 = 0;
    let currentArrNum2 = 0;
    let sum = 0;
    let isDifferent = false;

    for (let i = 0; i < arr1.length; i++) {
        currentArrNum1 = Number(arr1[i]);
        currentArrNum2 = Number(arr2[i]);
        sum += currentArrNum1;

        if (currentArrNum1 !== currentArrNum2) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isDifferent = true;
            break;
        }
    }

    if (isDifferent === false) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}

equalArrays(['10','20','30'], ['10','20','30']);