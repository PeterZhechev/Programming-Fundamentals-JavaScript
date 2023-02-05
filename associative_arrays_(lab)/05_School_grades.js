function schoolGrades(input) {

    let students = {};

    for (let el of input) {
        let splitted = el.split(' ');
        let name = splitted.shift();
        splitted = splitted.map(x => Number(x));
        let isExist = false;

        for (let key in students) {
            if (key === name) {
                isExist = true
            }
        }

        if (isExist) {
            for (let key in students) {
                if (key === name) {
                    let currentValue = students[key];
                    for (let el of splitted) {
                        currentValue.push(el);
                    }

                    students[name] = currentValue;
                }
            }
        } else {
            students[name] = splitted;
        }
    }

    let studentsWithAverageGrades = {};
    for (let key in students) {
        let count = 0;
        let sum = 0;
        let currentValue = students[key];
        for (let el of currentValue) {
            sum += el;
            count++;
        }

        let average = sum / count;
        studentsWithAverageGrades[key] = average;
    }

    let studentsEntries = Object.entries(studentsWithAverageGrades);
    studentsEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));
    let sortedStudents = Object.fromEntries(studentsEntries);

    for (let key in sortedStudents) {
        console.log(`${key}: ${sortedStudents[key].toFixed(2)}`);
    }
}

schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);