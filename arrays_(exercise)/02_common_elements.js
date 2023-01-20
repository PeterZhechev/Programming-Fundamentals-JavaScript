function commonElements(arr1, arr2) {

    let firstTempElement = '';
    let secontTempElement = '';

    for (let i = 0; i < arr1.length; i++) {
        firstTempElement = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            secontTempElement = arr2[j];
            if (firstTempElement === secontTempElement) {
                console.log(firstTempElement);
            }
        }
    }
    
}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
);