function nextDay(year, month, day) {

    let outputMonth = 0;
    let outputDay = 0;

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {

        if (day === 31 && month === 1) {
            outputMonth = 2;
            outputDay = 1;
        } else if (day === 29 && month === 2) {
            outputMonth = 3;
            outputDay = 1;
        } else if (day === 31 && month === 3) {
            outputMonth = 4;
            outputDay = 1;
        } else if (day === 30 && month === 4) {
            outputMonth = 5;
            outputDay = 1;
        } else if (day === 31 && month === 5) {
            outputMonth = 6;
            outputDay = 1;
        } else if (day === 30 && month === 6) {
            outputMonth = 7;
            outputDay = 1;
        } else if (day === 31 && month === 7) {
            outputMonth = 8;
            outputDay = 1;
        } else if (day === 31 && month === 8) {
            outputMonth = 9;
            outputDay = 1;
        } else if (day === 30 && month === 9) {
            outputMonth = 10;
            outputDay = 1;
        } else if (day === 31 && month === 10) {
            outputMonth = 11;
            outputDay = 1;
        } else if (day === 30 && month === 11) {
            outputMonth = 12;
            outputDay = 1;
        } else if (day === 31 && month === 12) {
            outputMonth = 1;
            outputDay = 1;
        } else {
            outputMonth = month;
            outputDay = day + 1;
        }
    } else {

        if (day === 31 && month === 1) {
            outputMonth = 2;
            outputDay = 1;
        } else if (day === 28 && month === 2) {
            outputMonth = 3;
            outputDay = 1;
        } else if (day === 31 && month === 3) {
            outputMonth = 4;
            outputDay = 1;
        } else if (day === 30 && month === 4) {
            outputMonth = 5;
            outputDay = 1;
        } else if (day === 31 && month === 5) {
            outputMonth = 6;
            outputDay = 1;
        } else if (day === 30 && month === 6) {
            outputMonth = 7;
            outputDay = 1;
        } else if (day === 31 && month === 7) {
            outputMonth = 8;
            outputDay = 1;
        } else if (day === 31 && month === 8) {
            outputMonth = 9;
            outputDay = 1;
        } else if (day === 30 && month === 9) {
            outputMonth = 10;
            outputDay = 1;
        } else if (day === 31 && month === 10) {
            outputMonth = 11;
            outputDay = 1;
        } else if (day === 30 && month === 11) {
            outputMonth = 12;
            outputDay = 1;
        } else if (day === 31 && month === 12) {
            outputMonth = 1;
            outputDay = 1;
        } else {
            outputMonth = month;
            outputDay = day + 1;
        }
    }


    if (month === 12 && day === 31) {
        year = year + 1;
    }

    if (year < 100 && year < 10) {
        year = (`190${year}`)
    } else if (year < 100 && year >= 10) {
        year = (`19${year}`)
    }

    console.log(`${year}-${outputMonth}-${outputDay}`);
}

nextDay(2022, 12, 31);