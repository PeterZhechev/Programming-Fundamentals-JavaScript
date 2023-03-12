function melrahShake(arr) {

    let str = arr[0];
    let pattern = arr[1];
    let splittedStr = str.split('');
    let indices = [];
    let isExist = false;

    while (pattern.length > 0) {

        for (let i = 0; i < splittedStr.length; i++) {
            let currentPart = splittedStr.slice(i, i + pattern.length);
            let joinned = currentPart.join('');
            if (joinned === pattern) {
                indices.push(i);
            }
        }

        if (indices.length >= 2) {
            let firstPart = indices.shift();
            let lastPart = indices.pop();
            splittedStr.splice(firstPart, pattern.length);
            splittedStr.splice(lastPart - pattern.length, pattern.length);
            console.log('Shaked it.');
            let harlfOfThePattern =Math.floor( pattern.length / 2);
            let splittedPattern = pattern.split('');
            splittedPattern.splice(harlfOfThePattern, 1);
            pattern = splittedPattern.join('');
            isExist = true;
        } else {
            isExist = false;
        }

        if (!isExist) {
            break;
        }
    }
    
    console.log('No shake.');
    console.log(splittedStr.join(''));
}

// melrahShake(['##mtm!!mm.mm*mtm.#', 'mtm']);

melrahShake(['astalavista baby', 'sta']);