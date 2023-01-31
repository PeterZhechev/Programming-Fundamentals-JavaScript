function schoolRegister(input) {

    let coppyOfInput = input.slice(0);
    let students = [];

    for (el of coppyOfInput) {
        let splitted = el.split('Graduated with an average score: ');
        let el1 = splitted[0].split('Student name: ');
        let el2 = Number(splitted[1]);
        if (el2 >= 3) {
            students.push(el1[1] + el2)
        }
    }

    let coppyOfStudents = students.slice(0);
    students = [];
    for (el of coppyOfStudents) {
        let splitted = el.split('Grade: ');
        students.push(splitted[0] + splitted[1]);
    }

    let delCount = 0;
    while (delCount < students.length) {

        delCount = 0;
        let smallest = Number.MAX_SAFE_INTEGER;
        for (el of students) {
            [name, grade, score] = el.split(',');

            // take the smallest grade

            if (Number(grade) < smallest) {
                smallest = Number(grade);
            }
        }

        let counter = 0;
        let tempList = [];
        let totalScore = 0;
        let averageScore = 0;
        let index = 0;
        for (el2 of students) {
            [name2, grade2, score2] = el2.split(',');
            if (Number(grade2) === smallest) {
                counter++;
                tempList.push(name2);
                totalScore += Number(score2);
                students.splice(index, 1, 'del');
            }

            index++;
        }

        averageScore = totalScore / counter;

        console.log(`${Number(smallest) + 1} Grade`);
        console.log(`List of students: ${tempList.join(', ')}`);
        console.log(`Average annual score from last year: ${averageScore.toFixed(2)}`);
        console.log('');

        // del count
        for (el3 of students) {
            if (el3 === 'del') {
                delCount++;
            }
        }
    }
}

// schoolRegister([
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
// ]);


schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
]);