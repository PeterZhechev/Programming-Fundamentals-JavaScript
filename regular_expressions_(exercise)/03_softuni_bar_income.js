function softUniBarIncome(input) {

    let currentLine = input.shift();

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*\|(?<count>\d+)\|(\d+[^|$%.\d])*[^|$%.\d]*(?<price>[\d]+[.]*[\d]*)\$/;
    let totalIncome = 0;

    while (currentLine !== 'end of shift') {

        let current = pattern.exec(currentLine);

        if (current !== null) {
            let totalPrice = Number(current.groups.count) * Number(current.groups.price);
            console.log(`${current.groups.name}: ${current.groups.product} - ${totalPrice.toFixed(2)}`);
            totalIncome += totalPrice;
        }

        currentLine = input.shift();
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
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