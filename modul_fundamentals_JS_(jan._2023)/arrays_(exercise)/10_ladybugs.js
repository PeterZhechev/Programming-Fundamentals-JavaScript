function ladybugs(arr) {

    let sizeOfTheField = arr[0];
    let initialIndexesOfAllLadybugs = arr[1];
    let arrLength = arr.length;
    let commands = arr[2];
    let initialField = [];

    for (let i = 0; i < sizeOfTheField; i++) {
        initialField.push(0);
    }

    initialIndexesOfAllLadybugs = initialIndexesOfAllLadybugs.split(' ');
    for (let j = 0; j < initialIndexesOfAllLadybugs.length; j++) {
        let currentIndex = Number(initialIndexesOfAllLadybugs[j]);
        if (currentIndex < initialField.length) {
            initialField[currentIndex] = 1;
        } else {
            continue;
        }
    }

    for (let i = 2; i < arrLength; i++) {
        commands = arr[i].split(' ');
        let [ladybugIndex, direction, flyLength] = [Number(commands[0]), commands[1], Number(commands[2])];
        let step = flyLength;

        if (ladybugIndex < 0) {
            continue;
        }

        if (direction === 'right') {
            if (initialField[ladybugIndex] === 1) {
                initialField[ladybugIndex] = 0;
                for (k = 0; k < initialField.length; k++) {
                    if (initialField[ladybugIndex + flyLength] === 1) {
                        flyLength += step;
                        continue;
                    } else if (initialField[ladybugIndex + flyLength] === 0) {
                        initialField[ladybugIndex + flyLength] = 1;
                        break;
                    } else {
                        break;
                    }
                }
            } else {
                continue;
            }

        } else if (direction === 'left') {
            if (initialField[ladybugIndex] === 1) {
                initialField[ladybugIndex] = 0;
                for (let l = 0; l < initialField.length; l++) {
                    if (initialField[ladybugIndex - flyLength] === 1) {
                        flyLength += step;
                        continue;
                    } else if (initialField[ladybugIndex - flyLength] === 0) {
                        initialField[ladybugIndex - flyLength] = 1;
                        break;
                    } else {
                        break;
                    }
                }
            } else {
                continue;
            }
        }

    }
    console.log(initialField.join(' '));
}

ladybugs([3, '0 1',
    '0 right 1',
    '2 right 1']
);