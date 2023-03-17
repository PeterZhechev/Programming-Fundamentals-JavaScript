function race(input) {

    let participants = input.shift().split(', ');

    let line = input.shift();
    let namePattern = /[A-Za-z]+/g;
    let distancePattern = /[0-9]/g;
    let list = {};

    while (line !== 'end of race') {
        let currentName = line.match(namePattern);
        let currentNameStr = '';
        for (let char of currentName) {
            currentNameStr += char;
        }

        let currentDistance = line.match(distancePattern);
        let sumCurrentDistance = 0;

        for (let num of currentDistance) {
            sumCurrentDistance += Number(num);
        }

        if (!list.hasOwnProperty(currentNameStr)) {
            list[currentNameStr] = sumCurrentDistance;
        } else {
            list[currentNameStr] += sumCurrentDistance;
        }

        line = input.shift();
    }

    let winnersList = {};

    for (let participant of participants) {
        if (list.hasOwnProperty(participant)) {
            winnersList[participant] = list[participant];
        }
    }

    let sortedWinerList = Object
        .entries(winnersList)
        .sort((a, b) => b[1] - a[1]);

    let places = ['st', 'nd', 'rd']

    for (let i = 0; i < 3; i++) {
        let currentEl = sortedWinerList[i];

        console.log(`${i + 1}${places[i]} place: ${currentEl[0]}`);
    }
}

// race([
//     'George, Peter, Bill, Tom',
//     'G4e@55or%6g6!68e!!@ ',
//     'R1@!3a$y4456@',
//     'B5@i@#123ll',
//     'G@e54o$r6ge#',
//     '7P%et^#e5346r',
//     'T$o553m&6',
//     'end of race'
// ]);

race([
    'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'
]);
