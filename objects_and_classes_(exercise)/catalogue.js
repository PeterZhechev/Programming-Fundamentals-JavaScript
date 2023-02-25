function catalogue(input) {

    let obj1 = {};

    for (let el of input) {
        [productName, productPrice] = el.split(' : ');
        obj1[productName] = Number(productPrice);
    }

    let arr1 = Object.keys(obj1).sort((a, b) => a.localeCompare(b));

    let counterObj = {};

    for (let el of arr1) {
        let firstLetter = el[0];
        counterObj[firstLetter] += '*';
    }

    let outputArr = [];

    for (let key in counterObj) {
        let currentValue = counterObj[key].split('undefined');
        let count = currentValue[1];
        let currentArr = [];
        currentArr.push(key);
        for (let i = 0; i < count.length; i++) {
            let currentKey = arr1.shift();
            let currentValue = obj1[currentKey];
            currentArr.push(`${currentKey}: ${currentValue}`);
        }

        outputArr.push(currentArr);
    }

    // print the result to console
    for (let el1 of outputArr) {
        let count = 0;
        for (let el2 of el1) {
            count++;
            if (count === 1) {
                console.log(el2);
            } else {
                console.log(`  ${el2}`);
            }
        }
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);