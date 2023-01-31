function sequences(input) {

    let arr = [];

    for (el of input) {
        let currentArr = JSON.parse(el).sort((a, b) => b - a);
        arr.push(currentArr);
    }

    // sort array by length
    for (el of arr) {
        arr.sort((a, b) => a.length - b.length);
    }

    // check for duplicate arrays;
    let unique = {};

    for (let el of arr) {
        let str = el.toString();
        unique[str] = 'add';
    }

    for (let key in unique) {
        let outputFormat = key.split(',');
        console.log(`[${outputFormat.join(', ')}]`);
    }
}

// sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
//     "[10, 1, -17, 0, 2, 13]",
//     "[4, -3, 3, -2, 2, -1, 1, 0]"]
// );

sequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]
);