function dungeonestDark(arr) {

    let initialHealth = 100;
    let initialCoins = 0;

    let formattedArr = [];
    let currentElement = '';
    let newCurrentElement = '';
    let currentElementOfNewCurrentElement = '';
    let itemOfCurrentElementOfNewCurrentElement = '';
    let newStr = '';
    let currentStr = arr.toString();
    let monsterName = '';


    for (let i = 0; i < currentStr.length; i++) {
        currentElement = currentStr[i];
        if (currentElement === '|') {
            formattedArr.push(newStr);
            newStr = '';
            continue;
        }
        newStr += currentElement;

        if (i === currentStr.length - 1) {
            formattedArr.push(newStr);
        }

    }

    for (let j = 0; j < formattedArr.length; j++) {
        newCurrentElement = formattedArr[j];

        for (let k = 0; k < newCurrentElement.length; k++) {
            currentElementOfNewCurrentElement = newCurrentElement[k];
            itemOfCurrentElementOfNewCurrentElement += currentElementOfNewCurrentElement;
            if (currentElementOfNewCurrentElement === ' ') {
                monsterName = itemOfCurrentElementOfNewCurrentElement;
                itemOfCurrentElementOfNewCurrentElement = '';
            }
        }

        if (newCurrentElement.includes('potion')) {
            if (initialHealth < 100) {
                initialHealth += Number(itemOfCurrentElementOfNewCurrentElement);
                if (initialHealth > 100) {
                    itemOfCurrentElementOfNewCurrentElement = initialHealth - Number(itemOfCurrentElementOfNewCurrentElement);
                    itemOfCurrentElementOfNewCurrentElement = 100 - itemOfCurrentElementOfNewCurrentElement;
                }
                if (initialHealth > 100) {
                    initialHealth = 100;
                }
                console.log(`You healed for ${itemOfCurrentElementOfNewCurrentElement} hp.`);
                console.log(`Current health: ${initialHealth} hp.`);
            }
        } else if (newCurrentElement.includes('chest')) {
            console.log(`You found ${itemOfCurrentElementOfNewCurrentElement} coins.`);
            initialCoins += Number(itemOfCurrentElementOfNewCurrentElement);
        } else {
            initialHealth -= Number(itemOfCurrentElementOfNewCurrentElement);
            if (initialHealth > 0) {
                console.log(`You slayed ${monsterName.trim()}.`);
            } else {
                console.log(`You died! Killed by ${monsterName.trim()}.`);
                console.log(`Best room: ${j + 1}`);
                break;
            }
        }
        itemOfCurrentElementOfNewCurrentElement = '';
    }
    if (initialHealth > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHealth}`);
    }
}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);