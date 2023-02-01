function addressBook(input) {

    let addressBookObj = {};

    for (let line of input) {
        [name, address] = line.split(':');
        addressBookObj[name] = address;
    }

    let addressBookEntries = Object.entries(addressBookObj);
    addressBookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));
    let sortedObj = Object.fromEntries(addressBookEntries);

    for (let key in sortedObj) {
        console.log(`${key} -> ${sortedObj[key]}`);
    }
}

addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);