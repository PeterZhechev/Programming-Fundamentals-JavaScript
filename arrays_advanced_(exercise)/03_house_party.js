function houseParty(arr) {

    let partyList = [];
    let currentPartyListLength = partyList.length;
    let alreadyInTheList = [];
    let notInTheList = [];
    let index = 0;
    let index2 = 0;
    let index3 = 0;
    let isExist = false;

    while (index < arr.length) {
        let currentCommand = arr[index];
        currentCommand = currentCommand.split(' ');
        if (currentCommand[2] === 'going!') {
            if (partyList.length === 0) {
                index2 = -1;
            } else {
                index2 = 0;
            }

            isExist = false;
            currentPartyListLength = partyList.length;
            while (index2 <= currentPartyListLength) {
                let currentCommand2 = partyList[index2];
                if (currentCommand[0] === currentCommand2) {
                    isExist = true;
                    alreadyInTheList.push(currentCommand[0]);
                    console.log(`${currentCommand[0]} is already in the list!`);
                    break;
                }
                index2++;

                if (index2 >= currentPartyListLength) {
                    if (isExist === false) {
                        partyList.push(currentCommand[0]);
                    }
                }

                index2++;
            }

            index2 = 0;
        } else if (currentCommand[2] === 'not') {
            if (partyList.length === 0) {
                index3 = -1;
            } else {
                index3 = 0;
            }

            currentPartyListLength = partyList.length;
            while (index3 < currentPartyListLength) {
                let currentCommand3 = partyList[index3];
                if (currentCommand[0] === currentCommand3) {
                    partyList.splice(index3, 1);
                    break;
                }

                index3++;
                if (index3 >= currentPartyListLength) {
                    notInTheList.push(currentCommand[0]);
                    console.log(`${currentCommand[0]} is not in the list!`);
                }
            }
        }
        index++;
    }

    for (let i = 0; i < partyList.length; i++) {
        console.log(partyList[i]);
    }
}

houseParty([
    'Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
]);