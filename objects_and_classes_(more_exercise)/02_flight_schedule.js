function flightSchedule(input) {

    let allFlights = {};
    let newlyChangedStatuses = {};

    let coppyedInput = input.slice(0);
    let allFlightsInArr = coppyedInput.shift();
    let newlyChangedStatusesInArr = coppyedInput.shift();
    let flightStatus = coppyedInput.shift().toString();

    // coppy all flights into object
    for (let line of allFlightsInArr) {
        let splitted = line.split(' ');
        let numberOfFlight = splitted.shift();
        let destination = splitted.join(' ');
        allFlights[numberOfFlight] = destination;
    }

    // coppy all canceled flights into object
    for (let line of newlyChangedStatusesInArr) {
        [numberOfFlight, destination] = line.split(' ');
        newlyChangedStatuses[numberOfFlight] = destination;
    }

    let canceledOutput = [];
    let readyToFlyOutput = [];
    let isCanceled = false;

    switch (flightStatus) {
        case 'Ready to fly':
            for (let keyInAll in allFlights) {
                isCanceled = false;
                for (let keyInCanceled in newlyChangedStatuses) {
                    if (keyInCanceled === keyInAll) {
                        isCanceled = true;
                    }
                }

                if (isCanceled === false) {
                    readyToFlyOutput.push(allFlights[keyInAll]);
                }
            }

            for (dist of readyToFlyOutput) {
                console.log(`{ Destination: '${dist}', Status: 'Ready to fly' }`);
            }

            break;

        case 'Cancelled':
            for (let keyInAll in allFlights) {
                for (let keyInCanceled in newlyChangedStatuses) {
                    if (keyInCanceled === keyInAll) {
                        canceledOutput.push(allFlights[keyInAll]);
                    }
                }
            }

            for (dist of canceledOutput) {
                console.log(`{ Destination: '${dist}', Status: 'Cancelled' }`);
            }

            break;

        default:
            break;
    }
}

// flightSchedule(
//     [['WN269 Delaware',
//         'FL2269 Oregon',
//         'WN498 Las Vegas',
//         'WN3145 Ohio',
//         'WN612 Alabama',
//         'WN4010 New York',
//         'WN1173 California',
//         'DL2120 Texas',
//         'KL5744 Illinois',
//         'WN678 Pennsylvania'],
//     ['DL2120 Cancelled',
//         'WN612 Cancelled',
//         'WN1173 Cancelled',
//         'SK430 Cancelled'],
//     ['Cancelled']]
// );

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
]);