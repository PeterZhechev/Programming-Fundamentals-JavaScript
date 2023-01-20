function formatGrade(grade) {

    let gradeAnnotation = '';

    if (grade < 3.00) {
        gradeAnnotation = "Fail";
    } else if (grade >= 3.00 && grade < 3.50) {
        gradeAnnotation = "Poor";
    } else if (grade >= 3.50 && grade < 4.50) {
        gradeAnnotation = "Good";
    } else if (grade >= 4.50 && grade < 5.50) {
        gradeAnnotation = "Very good";
    } else if (grade >= 5.50) {
        gradeAnnotation = "Excellent";
    }

    if (grade < 3.00) {
        return (`${gradeAnnotation} (2)`);
    } else if (grade >= 3.00) {
        return (`${gradeAnnotation} (${grade.toFixed(2)})`);
    }
}

let formatedGrade = formatGrade(5.81);

console.log(formatedGrade);
