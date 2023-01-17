function arrayManipulations(commands) {

    let array = commands[0];
    array = array.split(' ');
    let commandsLength = commands.length;
    let index = 1;

    while (index < commandsLength) {
        let currentCommand = commands[index];
        currentCommand = currentCommand.split(' ');

        switch (currentCommand[0]) {

            case 'Add':
                array.push(currentCommand[1]);
                break;

            case 'Remove':
                for (let i = 0; i < array.length; i++) {
                    let currentNum = Number(array[i]);
                    if (currentNum === Number(currentCommand[1])) {
                        array.splice(i, 1);
                    }
                }
                break;

            case 'RemoveAt':
                array.splice(currentCommand[1], 1);
                break;

            case 'Insert':
                array.splice(currentCommand[2], 0, currentCommand[1]);
                break;
        }
        index++;
    }
    console.log(array.join(' '));
}

arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']);