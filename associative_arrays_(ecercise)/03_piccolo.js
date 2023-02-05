function piccolo(input) {

    let parkingLot = {};

    for (let el of input) {
        [command, number] = el.split(', ');
        if (command === 'IN') {
            parkingLot[number] = 'IN';
        } else if (command === 'OUT') {
            delete parkingLot[number];
        }
    }

    function sortCarNums(unsortedNums) {
        let parkingLotEntries = Object.entries(unsortedNums);
        parkingLotEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));
        let sortedParkingLot = Object.fromEntries(parkingLotEntries);

        return sortedParkingLot;
    }

    let sortedCarNums = sortCarNums(parkingLot);

    function printTheresult(sortedExistCars) {
        let isExist = false;

        for (let key in sortedExistCars) {
            console.log(key);
            isExist = true;
        }

        if (isExist === false) {
            console.log('Parking Lot is Empty');
        }
    }

    printTheresult(sortedCarNums);
}

// piccolo([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU'
// ]);

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);