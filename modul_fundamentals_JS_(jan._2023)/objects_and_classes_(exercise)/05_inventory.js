function inventory(arr) {
    
    let formattedArr = [];
    let sortedArr = [];
    let heroName = '';
    let heroLevel = 0;
    let items = '';
    let arrayLength = arr.length;

    for (let i = 0; i < arrayLength; i++) {
        let currentLine = arr[i].split('/');

        heroName = (currentLine[0]).trim();
        heroLevel = Number((currentLine[1]).trim());
        items = (currentLine[2]).trim();

        let tempArr = [];
        tempArr.push(heroName);
        tempArr.push(heroLevel);
        tempArr.push(items);
        formattedArr.push(tempArr);
    }

    let smallest = Number.MAX_SAFE_INTEGER;
    let firstLine = [];
    let index = 0;

    for (let j = 0; j < arrayLength; j++) {

        for (let i = 0; i < formattedArr.length; i++) {
            let currentLine = formattedArr[i];
            if (Number(currentLine[1]) < smallest) {
                smallest = Number(currentLine[1]);
                firstLine = currentLine.slice(0);
                index = i;
            }
        }

        sortedArr.push(firstLine);
        formattedArr.splice(index, 1);
        index = 0;
        smallest = Number.MAX_SAFE_INTEGER;
    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );