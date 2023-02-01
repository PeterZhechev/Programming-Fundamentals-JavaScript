function storage(itemsAndTheirQuantity) {

    let storedItems = {};

    for (let el of itemsAndTheirQuantity)
        [item, quantity] = el.split(' ');
    let isExist = false;
    for (let key in storedItems) {
        
    }
}

storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);