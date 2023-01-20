function train(input) {

    let wagons = input.shift();
    let maxCapacityOfEachWagon = input.shift();
    wagons = wagons.split(' ');
    let tempArr = [];
    let index = 0;
    let arrLength = input.length;
    let commands = '';

    for (let i = 0; i < wagons.length; i++) {
        let currentNum = Number(wagons[i]);
        tempArr.push(currentNum);
    }

    wagons = [];
    wagons = tempArr;

    while (index < arrLength) {
        commands = input[index];
        let currentCommand = commands.split(' ');
        if (currentCommand[0] === 'Add') {
            wagons.push(Number(currentCommand[1]));
        } else {
            let currentNum = Number(currentCommand[0]);
            for (let j = 0; j < wagons.length; j++) {
                let currentWagon = wagons[j];
                if (currentNum + currentWagon <= Number(maxCapacityOfEachWagon)) {
                    wagons.splice(j, 1, currentNum + currentWagon);
                    break;
                }
            }

        }

        index++;
    }
    console.log(wagons.join(' '));
}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);