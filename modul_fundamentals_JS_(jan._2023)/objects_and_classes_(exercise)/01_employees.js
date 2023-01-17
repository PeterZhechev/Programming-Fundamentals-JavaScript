function employees(arr) {

    let personalNum = 0;
    let employeesLength = arr.length;

    class Employee {
        constructor(name, number) {
            this.employeeName = name;
            this.personalNum = number;
        }
    }

    for (let i = 0; i < employeesLength; i++) {
        let employeeName = arr.shift();
        personalNum = employeeName.length;
        let list = new Employee(employeeName, personalNum);
        console.log(`Name: ${list.employeeName} -- Personal Number: ${list.personalNum}`);
    }
}


// employees([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
// ]);

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);



