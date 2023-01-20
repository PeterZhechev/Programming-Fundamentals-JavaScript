function AirPollution(mapOfSofia, forcesAffectingTheAirQuality) {

    let matrixOfNums = [];
    let index = 0;
    const threshold = 50;

    for (let i = 0; i < mapOfSofia.length; i++) {
        let currentRow = mapOfSofia[i].split(' ').map(Number);
        matrixOfNums.push(currentRow);
    }

    while (index < forcesAffectingTheAirQuality.length) {
        let currentCommand = forcesAffectingTheAirQuality[index].split(' ');
        let command = currentCommand[0];
        let value = Number(currentCommand[1]);

        switch (command) {
            case 'breeze':
                for (let i = 0; i < matrixOfNums[value].length; i++) {
                    if (matrixOfNums[value][i] - 15 < 0) {
                        matrixOfNums[value][i] = 0;
                    } else {
                        matrixOfNums[value][i] -= 15;
                    }
                }
                break;

            case 'gale':
                for (let j = 0; j < matrixOfNums.length; j++) {
                    if (matrixOfNums[j][value] - 20 < 0) {
                        matrixOfNums[j][value] = 0;
                    } else {
                        matrixOfNums[j][value] -= 20;
                    }
                }
                break;

            case 'smog':
                for (k = 0; k < matrixOfNums.length; k++) {
                    let currentRow = matrixOfNums[k];
                    for (let l = 0; l < currentRow.length; l++) {
                        let currentNum = currentRow[l];
                        currentNum += value;
                        matrixOfNums[k][l] = currentNum;
                    }
                }
                break;
        }

        index++;
    }

    let pollutedAreas = [];
    let currentPollutedArea = '';
    let isPolluted = false;
    for (let i = 0; i < matrixOfNums.length; i++) {
        let currentRow = matrixOfNums[i];
        for (let j = 0; j < currentRow.length; j++) {
            let currentNum = currentRow[j];
            if (currentNum >= threshold) {
                isPolluted = true;
                currentPollutedArea = `${i}-${j}`;
                pollutedAreas.push(currentPollutedArea);
                currentPollutedArea = '';
            }
        }
    }

    let outputPollutedAreas = [];
    for (let i = 0; i < pollutedAreas.length; i++) {
        let currentIndex = pollutedAreas[i];
        let currentFinalArea = `[${currentIndex}]`;
        outputPollutedAreas.push(currentFinalArea);
    }

    if (isPolluted) {
        console.log(`Polluted areas: ${outputPollutedAreas.join(', ')}`);
    } else {
        console.log(`No polluted areas`);
    }
}

AirPollution(['5 7 3 28 32',
'41 12 49 30 33',
'3 16 20 42 12',
'2 20 10 39 14',
'7 34 4 27 24'],
['smog 11', 'gale 3', 'breeze 1', 'smog 2']
);