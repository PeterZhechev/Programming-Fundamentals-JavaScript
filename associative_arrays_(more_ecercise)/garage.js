function garage(input) {

    let garages = {};

    for (let el of input) {
        let info = {};
        [numberOfAGarage, infoAboutACar] = el.split(' - ');
        numberOfAGarage = Number(numberOfAGarage);
        let splited = infoAboutACar.split(', ');
        let currentArr = [];

        if (garages.hasOwnProperty(numberOfAGarage)) {
            currentArr = garages[numberOfAGarage];
            for (let el3 of splited) {
                garages[numberOfAGarage].push(el3);
            }

        } else {
            currentArr = [];

            for (let el2 of splited) {
                currentArr.push(el2);
            }

            garages[numberOfAGarage] = currentArr;
        }
    }

    
}

garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);