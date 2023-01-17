function vacation(groupCount, typeOfGroup, dayOfTheWeek) {

    let totalPrice = 0;

    if (typeOfGroup === "Business" && groupCount >= 100) {
        groupCount = groupCount - 10;
    }

    switch (dayOfTheWeek) {
        case "Friday":
            if (typeOfGroup === "Students") {
                totalPrice = groupCount * 8.45;
            } else if (typeOfGroup === "Business") {
                totalPrice = groupCount * 10.90;
            } else if (typeOfGroup === "Regular") {
                totalPrice = groupCount * 15.00;
            }
            break;

        case "Saturday":
            if (typeOfGroup === "Students") {
                totalPrice = groupCount * 9.80;
            } else if (typeOfGroup === "Business") {
                totalPrice = groupCount * 15.60;
            } else if (typeOfGroup === "Regular") {
                totalPrice = groupCount * 20.00;
            }
            break;

        case "Sunday":
            if (typeOfGroup === "Students") {
                totalPrice = groupCount * 10.46;
            } else if (typeOfGroup === "Business") {
                totalPrice = groupCount * 16.00;
            } else if (typeOfGroup === "Regular") {
                totalPrice = groupCount * 22.50;
            }
            break;
    }

    if (typeOfGroup === "Students" && groupCount >= 30) {
        totalPrice = totalPrice * 0.85;
    } else if (typeOfGroup === "Regular" && groupCount >= 10 && groupCount <= 20) {
        totalPrice = totalPrice * 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

vacation(100, "Business", "Sunday");