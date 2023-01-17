function spiceMustFlow(startingYield) {

    let workersConsume = 26;
    let days = 0;
    let totalAmount = 0;

    while (startingYield >= 100) {
        totalAmount += startingYield;
        totalAmount -= workersConsume;
        startingYield -= 10;
        days++;
    }

    if (totalAmount >= workersConsume) {
        totalAmount -= workersConsume;
    }

    console.log(days);
    console.log(totalAmount);
    
}

spiceMustFlow(450);