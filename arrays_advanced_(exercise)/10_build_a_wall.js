function BuildAWall(mileLongSections) {

    const oneCubicYardOfConcretePrice = 1900;
    const cubicYardsOfConcretePerDay = 195; // for one foot of heigh.
    const wallHeight = 30; // foots.
    const heightPerDay = 1; // foot.
    const concreteUsedDaily = [];
    const totalHeigthOfSections = mileLongSections.length * wallHeight;

    let daysCount = 0;
    let count = 0;

    while (true) {

        for (let i = 0; i < mileLongSections.length; i++) {
            let section = mileLongSections[i];
            if (section < wallHeight) {
                mileLongSections.splice(i, 1, section + heightPerDay);
                count += cubicYardsOfConcretePerDay;
            }
        }

        if (count > 0) {
            concreteUsedDaily.push(count);
        } else {
            break;
        }
        count = 0;
        daysCount++;
    }

    let totalCubicYardsOfConcrete = 0;

    for (let currentCubicYardsOfConcrete of concreteUsedDaily) {
        totalCubicYardsOfConcrete += currentCubicYardsOfConcrete;
    }

    let totalPrice = totalCubicYardsOfConcrete * oneCubicYardOfConcretePrice;
    console.log(concreteUsedDaily.join(', '));
    console.log(`${totalPrice} pesos`);
}

BuildAWall([21, 25, 28]);
