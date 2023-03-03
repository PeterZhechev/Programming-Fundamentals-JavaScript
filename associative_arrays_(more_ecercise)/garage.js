function garage(input) {

    let garages = {};

    for (let el of input) {

        [numberOfAGarage, infoAboutACar] = el.split(' - ');
        numberOfAGarage = Number(numberOfAGarage);
        let currentCars = infoAboutACar.split(', ');

        if (garages.hasOwnProperty(numberOfAGarage)) {
            let currenArr = [];

            for (let currentCar of currentCars) {
                currenArr.push(currentCar);
            }

            garages[numberOfAGarage].push(currenArr);
        } else {
            garages[numberOfAGarage] = [];
            let currenArr = [];

            for (let currentCar of currentCars) {
                currenArr.push(currentCar);
            }

            garages[numberOfAGarage].push(currenArr);
        }
    }

    let garagesKeys = Object
        .keys(garages)
        .map(Number)
        .sort((a, b) => a - b);

    for (let key of garagesKeys) {
        console.log(`Garage № ${key}`);
        let currentArr = garages[key];
        for (let currentCar of currentArr) {
            let inOneLine = currentCar.join(', ');
            let splittedInOneLine = inOneLine.split(': ');
            let outputFormat = splittedInOneLine.join(' - ');
            console.log(`--- ${outputFormat}`);
        }
    }
}

// garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);

garage([
    '1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol'])