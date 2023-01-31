function schoolRegister(input) {

    let coppyOfInput = input.slice(0);
    let students = [];
    let studentsInObj = {};

    for (let studentName of coppyOfInput) {
        [studentName, studentGrade, studentScore] = studentName.split(',');
        [textToDel, name] = studentName.split(':');
        [textToDel, grade] = studentGrade.split('Grade: ');
        grade = Number(grade);
        grade++;
        [textToDel, score] = studentScore.split('Graduated with an average score: ');
        let gradeAndName = grade + ' ' + name.trim();
        let nameGradeScore = gradeAndName + ' ' + score;
        students.push(nameGradeScore);
    }

    for (el of students) {
        let splitted = el.split(' ');
        let grade = Number(splitted.shift());
        let joinned = splitted.join(' ')
        studentsInObj[joinned] = grade;
    }

    let studentsInObjEntries = Object.entries(studentsInObj);

    while (studentsInObjEntries.length > 0) {
        
        let smaller = Number.MAX_SAFE_INTEGER;
        for (let el of studentsInObjEntries) {
            let grade = el[1];
    
            if (grade < smaller) {
                smaller = grade;
            }
        }
    
        let avgScoreForAll = 0;
        let scoreCounter = 0;
        let list = [];
        let currentGrade = 0;
        let index = 0;
    

        for (let i = 0; i < studentsInObjEntries.length; i++) {
            let item = studentsInObjEntries[i];
            let student = item[0];
            let grade = item[1];
            let splitted = student.split(' ');
            let score = Number(splitted.pop());
            let studentName = splitted.join(' ');
            if (score < 3) {
                studentsInObjEntries.splice(index, 1);
            }

            if (grade === smaller) {
                if (score >= 3.00) {
                    avgScoreForAll += score;
                    scoreCounter++;
                    list.push(studentName);
                    currentGrade = grade;
                    studentsInObjEntries.splice(index, 1);
                } 
            }

            index++;
        }
    
        avgScoreForAll = avgScoreForAll / scoreCounter;
        console.log(`${currentGrade} Grade`);
        console.log(`List of students: ${list.join(', ')}`);
        console.log(`Average annual score from last year: ${avgScoreForAll.toFixed(2)}`);
        console.log('');
    }


}

schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);