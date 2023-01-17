function carWash(commands) {

    let commandsLength = commands.length;
    let count = 0;
    let carStatus = 0;
    while (count < commandsLength) {
        let currentCommand = commands[count];
        switch (currentCommand) {
            case 'soap':
                carStatus += 10;
                break;
            case 'water':
                carStatus = carStatus * 1.20;
                break;
            case 'vacuum cleaner':
                carStatus = carStatus * 1.25;
                break;
            case 'mud':
                carStatus = carStatus * 0.90;
                break;
            default:
                break;
        }
        count++;
    }

    return `The car is ${carStatus.toFixed(2)}% clean.`;
}

let car = carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);

console.log(car);