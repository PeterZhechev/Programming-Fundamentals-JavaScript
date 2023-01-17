function ArrayManipulator(arrOfIntegers, arrOfCommands) {

    let index = 0;
    let arrOfCommandsLength = arrOfCommands.length;
    let tempArrForSumPairs = [];
    let tempPairSum = 0;

    while (index < arrOfCommandsLength) {
        let currentElement = arrOfCommands[index];
        let splittedElement = currentElement.split(' ');
        let command = splittedElement.shift();

        switch (command) {

            case 'add':
                splittedElement = splittedElement.map(Number);
                arrOfIntegers.splice(splittedElement[0], 0, splittedElement[1]);
                break;

            case 'addMany':
                splittedElement = splittedElement.map(Number);
                let specificIndex = splittedElement.shift();
                for (let i = 0; i < splittedElement.length; i++) {
                    let CurrentNum = splittedElement[i];
                    arrOfIntegers.splice(specificIndex + i, 0, CurrentNum);
                }

                break;

            case 'contains':
                splittedElement = splittedElement.map(Number);
                console.log(arrOfIntegers.indexOf(splittedElement[0]));
                break;

            case 'remove':
                splittedElement = splittedElement.map(Number);
                arrOfIntegers.splice(splittedElement[0], 1);
                break;

            case 'shift':
                splittedElement = splittedElement.map(Number);
                for (let j = 0; j < splittedElement[0]; j++) {
                    let currentNum = arrOfIntegers.shift();
                    arrOfIntegers.push(currentNum);
                }

                break;

            case 'sumPairs':
                while (arrOfIntegers.length > 0) {
                    let firstNum = arrOfIntegers.shift();
                    let secondNum = arrOfIntegers.shift();
                    if (typeof secondNum === 'number') {
                        tempPairSum = firstNum + secondNum;
                    } else if (typeof secondNum !== 'number') {
                        tempPairSum = firstNum;
                    }
                    tempArrForSumPairs.push(tempPairSum);
                    tempPairSum = 0;
                }

                arrOfIntegers = tempArrForSumPairs.slice(0);
                tempArrForSumPairs.splice(0, tempArrForSumPairs.length);

                break;

            case 'print':
                console.log(`[ ${(arrOfIntegers).join(', ')} ]`);
                break;
        }

        if (command === 'print') {
            break;
        }

        index++;
    }
}
ArrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);