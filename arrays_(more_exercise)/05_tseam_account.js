function tseamAccount(arr) {

    let tseamAccount = [];
    let tseamAccountToString = '';

    tseamAccount.push(arr[0]);
    tseamAccountToString = tseamAccount.toString();

    let tseamAccountToStringLength = tseamAccountToString.length;
    let currentElement = '';
    let currentText = '';
    let newTseamAccount = [];
    let newName = [];
    let newGame = [];
    let currentCommandAndGame = '';
    let currentSymbol = '';
    let tempCommand = '';

    let currentCommand = '';
    let currentGame = '';


    for (let i = 0; i < tseamAccountToStringLength; i++) {
        currentElement = tseamAccountToString[i];
        currentText += currentElement;
        if (currentElement === ' ' || i === tseamAccountToStringLength - 1) {
            newTseamAccount.push(currentText.trim());
            currentText = '';
        }
    }

    for (let j = 1; j < arr.length; j++) {
        currentCommandAndGame = arr[j];
        currentCommand = '';
        currentGame = '';
        tempCommand = '';

        for (let k = 0; k < currentCommandAndGame.length; k++) {
            currentSymbol = currentCommandAndGame[k];
            if (currentSymbol === ' ') {
                currentCommand = tempCommand;
                tempCommand = '';
                continue;
            }

            tempCommand += currentSymbol;
            if (k === currentCommandAndGame.length - 1) {
                currentGame = tempCommand;
            }
        }


        if (currentCommand === 'Play!' || currentGame === 'Play!') {
            break;

        } else if (currentCommand === "Install") {

            if (newTseamAccount.includes(currentGame)) {
                continue;
            } else {
                newTseamAccount.push(currentGame);
                continue;
            }

        } else if (currentCommand === 'Uninstall') {

            if (newTseamAccount.includes(currentGame)) {
                let index = newTseamAccount.indexOf(currentGame);
                newTseamAccount.splice(index, 1);
                continue;
            }

        } else if (currentCommand === 'Update') {

            if (newTseamAccount.includes(currentGame)) {
                let index = newTseamAccount.indexOf(currentGame);
                newTseamAccount.splice(index, 1);
                newTseamAccount.push(currentGame);
                continue;
            }

        } else if (currentCommand === 'Expansion') {

            currentGame = currentGame.split('-');
            newName = currentGame[0];
            newGame = currentGame[1];

            if (newTseamAccount.includes(newName)) {
                let index = newTseamAccount.indexOf(newName);
                newTseamAccount.splice(index + 1, 0, (`${newName}:${newGame}`));
                continue;
            }

        }
    }

    console.log(newTseamAccount.join(' '));

}

tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']);