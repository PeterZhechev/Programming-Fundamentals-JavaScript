function companyUsers(input) {

    let obj1 = {};

    for (let el of input) {
        [companyName, employeesId] = el.split(' -> ');

        if (obj1[companyName]) {
            if (!obj1[companyName].includes(employeesId)) {
                obj1[companyName].push(employeesId);
            }
        } else {
            obj1[companyName] = [];
            obj1[companyName].push(employeesId);
        }

    }

    let keysArr = Object.keys(obj1);
    keysArr.sort((a, b) => a.localeCompare(b));

    for (let el of keysArr) {
        let index = 0;
        let currentArr = obj1[el];
        console.log(el);
        for (let el2 of currentArr) {
            console.log(`-- ${el2}`);
            index++;
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);