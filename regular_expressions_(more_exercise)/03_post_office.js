function postOffice(inputText) {

    [firstPart, secondPart, thirdPart] = inputText[0].split('|');

    let firstPattern = /(\#|\$|\%|\&|\*)(?<capitalLetters>[A-Z]+)\1/g;
    let secondPattern = /(?<asciiCode>[0-9][0-9]):(?<length>01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20)/g;

    let firstMatch = [...firstPart.matchAll(firstPattern)];
    let secondMatch = [...secondPart.matchAll(secondPattern)];
    let thirdMatch = thirdPart.split(' ');

    let capitalLettersAndTheirLength = new Map();

    for (let currentLennter of firstMatch[0].groups.capitalLetters) {
        capitalLettersAndTheirLength.set(currentLennter, 0);
    }

    for (let pair of secondMatch) {
        let asciiCodeToCapitalLetter = String.fromCharCode(pair.groups.asciiCode);
        let length = pair.groups.length;

        if (capitalLettersAndTheirLength.has(asciiCodeToCapitalLetter)) {
            let currentLength = capitalLettersAndTheirLength.get(asciiCodeToCapitalLetter);
            if (currentLength === 0) {
                capitalLettersAndTheirLength.set(asciiCodeToCapitalLetter, Number(length));
            }
        }
    }

    for (let letterAndLength of capitalLettersAndTheirLength) {
        let currentValidLetter = letterAndLength[0];
        let currentValidWordLength = letterAndLength[1];

        for (let word of thirdMatch) {
            if (currentValidLetter === word[0]) {
                if (currentValidWordLength === word.length - 1) {
                    console.log(word);
                }
            }
        }
    }
}

postOffice(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos']);

// postOffice(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig']);

