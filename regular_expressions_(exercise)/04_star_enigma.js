function starEnigma(input) {

    let messagesCount = Number(input.shift());

    let decryptionKeyPattern = /[SsTtAaRr]/g;

    let mainPattern = /(@(?<planetName>[A-Za-z]+))[^\@\-\!\:\>]*(:(?<planetPopulation>[0-9]+))[^\@\-\!\:\>]*(!(?<attackType>[AD])!)[^\@\-\!\:\>]*(->(?<soldierCount>[0-9]+))/;

    let decryptedMessages = [];

    for (let i = 0; i < messagesCount; i++) {

        let currentMessage = input[i];
        let decryptionKeyLetters = currentMessage.match(decryptionKeyPattern);
        let decryptionKey = 0;

        if (decryptionKeyLetters) {
            decryptionKey = decryptionKeyLetters.length;
        }

        let currentDecryptedMessage = '';

        for (let ch of currentMessage) {
            let currentCharToAsciiNum = ch.charCodeAt();
            let currentDecryptedChar = String.fromCharCode(currentCharToAsciiNum - decryptionKey);
            currentDecryptedMessage += currentDecryptedChar;
        }

        decryptedMessages.push(currentDecryptedMessage);
    }

    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let message of decryptedMessages) {

        let currentMatchedMessage = message.match(mainPattern);

        if (currentMatchedMessage) {
            let currentAttackType = currentMatchedMessage.groups.attackType;
            let currentPlanetName = currentMatchedMessage.groups.planetName;

            if (currentAttackType === 'A') {
                attackedPlanets.push(currentPlanetName);
            } else if (currentAttackType === 'D') {
                destroyedPlanets.push(currentPlanetName);
            }
        }
    }

    let sortedAttackedPlanets = attackedPlanets.sort((a, b) => a.localeCompare(b));
    let sortedDestroyedPlanets = destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${sortedAttackedPlanets.length}`);
    for (let planet of sortedAttackedPlanets) {
        console.log(`-> ${planet}`);
    }

    console.log(`Destroyed planets: ${sortedDestroyedPlanets.length}`);
    for (let planet of sortedDestroyedPlanets) {
        console.log(`-> ${planet}`);
    }
}

// starEnigma([
//     '2',
//     'STCDoghudd4=63333$D$0A53333',
//     'EHfsytsnhf?8555&I&2C9555SR'
// ]);

starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);