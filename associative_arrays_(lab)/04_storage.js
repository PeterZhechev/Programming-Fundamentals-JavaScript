function storage(itemsAndTheirQuantity) {

    let storedItems = {};

    for (let el of itemsAndTheirQuantity) {
        [item, quantity] = el.split(' ');
        let isExist = false;

        for (let key in storedItems) {

            if (key === item) {
                isExist = true
            }
        }

        if (isExist) {
            storedItems[item] += Number(quantity);
        } else {
            storedItems[item] = Number(quantity);
        }
    }

    for (let key in storedItems) {
        console.log(`${key} -> ${storedItems[key]}`);
    }
}

storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);