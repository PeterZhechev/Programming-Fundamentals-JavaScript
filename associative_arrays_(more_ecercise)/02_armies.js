function armies(input) {

    let currentElement = input.shift();

    while (input.length > 0) {

        let leaders = {};
        let splitted = currentElement.split(' ');
        if (splitted[splitted.length - 1] === 'arrives') {
            splitted.pop();
            let joinned = splitted.join(' ');
            leaders[joinned] = [];
        } else {
            currentElement = splitted.join(' ');
            console.log(currentElement);
        }
            currentElement = input.shift();
    }
}

armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
]);