function aMinerTask(input) {

    let obj1 = {};
    let resource = '';
    let quantity = '';

    for (let i = 1; i <= input.length; i++) {
        if (i % 2 !== 0) {
            resource = input[i - 1];
        } else {
            quantity = Number(input[i - 1]);
            if (obj1[resource]) {
                obj1[resource] += quantity;
            } else {
                obj1[resource] = quantity;
            }
        }

    }

    for (let el of Object.keys(obj1)) {
        console.log(`${el} -> ${obj1[el]}`);
    }
}

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);