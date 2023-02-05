function wordsTracker(input) {

    let copyOfInput = input.slice(0);
    let lookingForWord = copyOfInput.shift()
    .split(' '); 
    let lookingForWordObj = {};

    for (let word of lookingForWord) {
        lookingForWordObj[word] = 0;
    }

    for (let word of copyOfInput) {
        for (let key in lookingForWordObj) {
            if (key === word) {
                lookingForWordObj[word] += 1;
            }
        }
    }

    function sortTheObject(inputObj) {
        let obj1Entries = Object.entries(inputObj);
        let sortedArr = obj1Entries.sort((a, b) => b[1] - a[1]);
        let sortedObj1 = {};
    
        for (let i = 0; i < sortedArr.length; i++) {
            let currentPair = sortedArr[i];
            let word = currentPair[0];
            let count = currentPair[1];
            sortedObj1[word] = count;
        }
    
        for (let key in sortedObj1) {
            console.log(`${key} - ${sortedObj1[key]}`);
        }
    }

    sortTheObject(lookingForWordObj);
}

wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);