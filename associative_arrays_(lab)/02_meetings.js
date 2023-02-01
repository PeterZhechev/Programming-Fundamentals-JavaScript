function meetings(input) {

    let obj = {};

    for (let el of input) {
        [weekday, name] = el.split(' ');
        let isExist = false;

        for (let key in obj) {
            if (key === weekday) {
                isExist = true;
            }
        }
        if (isExist) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            obj[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim',
]);