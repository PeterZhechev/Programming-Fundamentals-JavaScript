function postOffice(inputText) {

    [firstPart, secondPart, thirdPart] = inputText[0].split('|');

    let firstPattern = /(\#|\$|\%|\&|\*)(?<capitalLetters>[A-Z]+)\1/g;
    let secondPattern = /(?<asciiCode>[0-9]{2}):(?<length>[0-9]{2})/g;
    let thirdPattern = /(?<firstLetter>[A-Z])(?<remainingLetters>[^ ]+)/g;

    let firstMatch = [...firstPart.matchAll(firstPattern)];
    let secondMatch = [...secondPart.matchAll(secondPattern)];
    let thirdMatch = [...thirdPart.matchAll(thirdPattern)];

    let asciiCodeAndLengthPairs = [];

    let capitalLetters = new Set();

    for (let el of firstMatch) {
        let currentCapitalLetters = el.groups.capitalLetters.split('');
        for (let ch of currentCapitalLetters) {
            capitalLetters.add(ch);
        }
    }

    let unicalPairs = new Set();

    for (let pair of secondMatch) {
        unicalPairs.add(pair[0]);
    }

    for (let pair of unicalPairs) {

        let [asciiCode, length] = pair.split(':');
        length = Number(length);

        if (asciiCode >= 65 && asciiCode <= 90) {
            let currentLetter = String.fromCharCode(asciiCode);
            let currentPair = {};
            currentPair[currentLetter] = length;
            asciiCodeAndLengthPairs.push(currentPair);
        }
    }

    let chechedLetters = [];

    for (let ch of capitalLetters) {

        for (let kvp of asciiCodeAndLengthPairs) {
            for (let key in kvp) {
                if (ch === key) {
                    let currentObj = {};
                    currentObj[ch] = kvp[key] + 1;
                    chechedLetters.push(currentObj);
                    break;
                }
            }
        }
    }

    let list = new Set();

    for (let el of thirdMatch) {
        let firstLetter = el.groups.firstLetter;
        if (firstLetter.charCodeAt() >= 65 && firstLetter.charCodeAt() <= 90) {
            list.add(el[0]);
        }
    }

    let output = [];

    for (let el of chechedLetters) {
        let currentEntries = Object.entries(el);
        let currentLetter = currentEntries[0][0];
        let currentLength = Number(currentEntries[0][1]);
        for (let el2 of list) {
            let currentFirstListLetter = el2[0];
            let currentListLength = el2.length;

            if (currentLetter === currentFirstListLetter) {
                if (currentLength === currentListLength) {
                    output.push(el2);
                }
            }
        }
    }

    console.log(output.join('\n'));
}

postOffice(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos']);

// postOffice(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig']);


