function softUniBarIncome(input) {

    let currentLine = input.shift();

    let dataList = new Map;

    let customerPattern = /%(?<name>[A-Z][a-z]+)%/;
    let productPattern = /<(?<product>[A-Za-z]+)>/;
    let countPattern = /\|(?<count>[0-9]+)\|/;
    let pricePattern = /(?<price>[0-9.]+)\$/;

    while (currentLine !== 'end of shift') {

        let isValid = true;

        let currentCustomer = currentLine.match(customerPattern);
        if (currentCustomer !== null) {
            currentCustomer = currentLine.match(customerPattern).groups.name;
        } else {
            isValid = false;
        }

        let currentProduct = currentLine.match(productPattern);
        if (currentProduct !== null) {
            currentProduct = currentLine.match(productPattern).groups.product;
        } else {
            isValid = false;
        }

        let currentCount = currentLine.match(countPattern);
        if (currentCount !== null) {
            currentCount = Number(currentLine.match(countPattern).groups.count);
        } else {
            isValid = false;
        }

        let currentPrice = currentLine.match(pricePattern);
        if (currentPrice !== null) {
            currentPrice = Number(currentLine.match(pricePattern).groups.price);
        } else {
            isValid = false;
        }

        if (!dataList.has(currentCustomer) && isValid) {
            dataList.set(currentCustomer, new Map);
            let currentCustemerInExistingMap = dataList.get(currentCustomer);
            currentCustemerInExistingMap.set(currentProduct, (currentPrice * currentCount));
        } else if (dataList.has(currentCustomer) && isValid) {
            currentCustemerInExistingMap = dataList.get(currentCustomer);
            currentCustemerInExistingMap.set(currentProduct, (currentPrice * currentCount));
        }

        currentLine = input.shift();
    }

    let totalIncome = 0;

    for (let el of [...dataList.entries()]) {
        let currentCustemer = el[0];
        let currentProductAndPrice = el[1];
        let currentProductAndPriceEntries = currentProductAndPrice.entries();
        for (let el2 of currentProductAndPriceEntries) {
            let currentProduct = el2[0];
            let currentPrice = Number(el2[1]);
            totalIncome += currentPrice;
            console.log(`${currentCustemer}: ${currentProduct} - ${currentPrice.toFixed(2)}`);
        }

    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Test>|1|1.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);

// softUniBarIncome([
//     '%InvalidName%<Croissant>|2|10.3$',
//     '%Peter%<Gum>1.3$',
//     '%Maria%<Cola>|1|2.4',
//     '%Valid%<Valid>valid|10|valid20$',
//     'end of shift'
// ]);