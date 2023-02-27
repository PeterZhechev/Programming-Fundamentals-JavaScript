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

}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);