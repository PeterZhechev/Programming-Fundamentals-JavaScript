function phoneBook(input) {

    let obj = {};

    for (let el of input) {
        [name, number] = el.split(' ');
        obj[name] = number;
    }

    // Print the result
    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

phoneBook(
    ['Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112',
        'Tim 0876566344']
);