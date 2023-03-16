function furniture(input) {

    let currentLine = input.shift();
    let pattern = />>(?<name>[A-Z]+[a-z]*)<<(?<price>[0-9.]+)!(?<quantity>[0-9]+)/g;
    let boughtFurniture = [];
    let totalMoneySpend = 0;

    while (currentLine !== 'Purchase') {
        let result = [...currentLine.matchAll(pattern)];
        if (result.length > 0) {
            let currentGroup = result[0].groups;
            boughtFurniture.push(currentGroup.name);
            totalMoneySpend += Number(currentGroup.price * currentGroup.quantity);
        }

        currentLine = input.shift();
    }

    console.log('Bought furniture:');
    if (boughtFurniture.length > 0) {
        console.log(boughtFurniture.join('\n'));
    }
    console.log(`Total money spend: ${totalMoneySpend.toFixed(2)}`);
}

// furniture([
//     '>>Sofa<<312.23!3',
//     '>>TV<<300!5',
//     '>Invalid<<!5',
//     'Purchase',
// ]);

// furniture([
//     '>>Laptop<<312.2323!3',
//     '>>TV<<300.21314!5',
//     '>Invalid<<!5',
//     '>>TV<<300.21314!20',
//     '>>Invalid<!5',
//     '>>TV<<30.21314!5',
//     '>>Invalid<<!!5',
//     'Purchase'
// ]);

furniture([
    '>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase'
]);