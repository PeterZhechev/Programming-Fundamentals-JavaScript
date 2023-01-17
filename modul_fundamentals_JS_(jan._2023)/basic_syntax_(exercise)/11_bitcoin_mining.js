function bitcoin(input) {

    let index = 0;
    let minnedGoldForDay = Number(input[index])

    let minedGoldIntoMoney = 0;

    const oneGramOfGold = 67.51; // lv.
    const oneBitcoin = 11949.16; // lv.

    let bitcoinCount = 0;
    let totalBitcoinCount = 0;

    let dayOfTheFirstPurchasedBitcoin = 0;

    let numberOfBitcoins = 0;

    while (index < input.length) {

        minnedGoldForDay = Number(input[index])
        index++;

        if (index % 3 === 0) {
            minnedGoldForDay = minnedGoldForDay * 0.70;
        }

        minedGoldIntoMoney += (minnedGoldForDay * oneGramOfGold);

        if (minedGoldIntoMoney >= oneBitcoin) {

            numberOfBitcoins = Math.trunc(minedGoldIntoMoney / oneBitcoin);
            totalBitcoinCount += numberOfBitcoins;

            minedGoldIntoMoney = minedGoldIntoMoney - (numberOfBitcoins * oneBitcoin);

            bitcoinCount++;
        }

        if (bitcoinCount === 1) {
            dayOfTheFirstPurchasedBitcoin = index;
        }

    }

    console.log(`Bought bitcoins: ${totalBitcoinCount}`);

    if (dayOfTheFirstPurchasedBitcoin !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfTheFirstPurchasedBitcoin}`);
    }

    console.log(`Left money: ${(minedGoldIntoMoney).toFixed(2)} lv.`);

}

bitcoin([100, 200, 300]);