function wordOccurrences(input) {

    let obj1 = {};
    let isExist = false;

    for (let word of input) {
        isExist = false;

        for (let key in obj1) {
            if (key === word) {
                isExist = true;
            }
        }

        if (isExist) {
            for (let key in obj1) {
                if (key === word) {
                    obj1[key] += 1;
                    break;
                }
            }
        } else {
            obj1[word] = 1;
        }
    }

    function sortTheObject(rawObj) {
        let obj1Entries = Object.entries(rawObj);
        let sortedArr = obj1Entries.sort((a, b) => b[1] - a[1]);
        let sortedObj1 = {};
        for (let i = 0; i < sortedArr.length; i++) {
            let currentPair = sortedArr[i];
            let word = currentPair[0];
            let count = currentPair[1];
            sortedObj1[word] = count;
        }

        return sortedObj1;
    }

    let sortedObject1 = sortTheObject(obj1);

    function printTheResult(objectToPrint) {
        for (let word in objectToPrint) {
            console.log(`${word} -> ${obj1[word]} times`);
        }
    }

    printTheResult(sortedObject1);
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);