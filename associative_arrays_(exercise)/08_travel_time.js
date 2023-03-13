function travelTime(input) {

    let travelDestinations = [];

    for (let el of input) {
        let [countryName, townName, travelCost] = el.split(' > ');
        let obj1 = {
            countryName: countryName,
            townName: townName,
            travelCost: travelCost,
        }

        travelDestinations.push(obj1);
    }

    let currentCheapest = {};
    let cheapest = [];

    while (travelDestinations.length > 0) {
        let currentDestination = travelDestinations.pop();

        currentCheapest.countryName = currentDestination.countryName;
        currentCheapest.townName = currentDestination.townName;
        currentCheapest.travelCost = currentDestination.travelCost;
        let isSmallest = Number(currentCheapest.travelCost);

        for (let el of travelDestinations) {
            let currentCountryName = el.countryName;
            let currentTownName = el.townName;
            let currentTravelCost = el.travelCost;

            if (currentCheapest.countryName === currentCountryName && currentCheapest.townName === currentTownName) {
                if (Number(currentTravelCost) < isSmallest) {
                    isSmallest = Number(currentTravelCost);
                }
            }
        }

        currentCheapest.travelCost = isSmallest;

        let currentArr = [];
        currentArr.push(currentCheapest.countryName, currentCheapest.townName, Number(currentCheapest.travelCost));

        let isExist = false;

        if (cheapest.length > 0) {
            for (let el of cheapest) {
                if (currentArr[0] === el[0] && currentArr[1] === el[1]) {
                    isExist = true;
                    break;
                }
            }

            if (isExist === false) {
                cheapest.push(currentArr);
            }
        } else {
            cheapest.push(currentArr);
        }
    }

    let obj3 = {};

    while (cheapest.length > 0) {
        let currentDestination = cheapest.pop();
        let currentCountryName = currentDestination.shift();
        let currentTownName = currentDestination.shift();
        let currentTravelCost = currentDestination.shift();
        let townNameAndTravelCost = {};
        townNameAndTravelCost[currentTownName] = currentTravelCost;

        if (obj3[currentCountryName]) {
            let currentObj = obj3[currentCountryName];
            currentObj[currentTownName] = currentTravelCost;
        } else {
            obj3[currentCountryName] = townNameAndTravelCost;
        }
    }

    let sortedCountryNamesAlphabetically = Object.keys(obj3).sort((a, b) => a.localeCompare(b));

    for (let currentCountryName of sortedCountryNamesAlphabetically) {
        let currentCountryNameAndTravelCost = obj3[currentCountryName];
        let currentCountryNameAndTravelCostToArrEntries = Object.entries(currentCountryNameAndTravelCost);
        let sortedCurrentCountryNameAndTravelCost = currentCountryNameAndTravelCostToArrEntries.sort((a, b) => a[1] - b[1]);

        let outputFormat = [];
        let currentArr = [];
        let currentOutputFormat = '';

        for (let el1 of sortedCurrentCountryNameAndTravelCost) {
            for (let i = 1; i <= el1.length; i++) {
                let currentElement = el1[i - 1];
                currentArr.push(currentElement);
                if (i % 2 === 0) {
                    currentOutputFormat = currentArr.join(' -> ');
                    outputFormat.push(currentOutputFormat);
                    currentOutputFormat = '';
                    currentArr = [];
                }
            }
        }
        console.log(`${currentCountryName} -> ${outputFormat.join(' ')}`);
    }
}

// travelTime([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"
// ]);

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);