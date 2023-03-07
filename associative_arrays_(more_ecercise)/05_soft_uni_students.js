function softUniStudents(input) {

    const courses = {};
    const coursesCapacity = {};
    const studentsAndCredits = {};

    for (let el of input) {
        let [courseName, courseCapacity] = el.split(': ');
        courseCapacity = Number(courseCapacity);

        if (courseCapacity >= 0) {
            if (!courses.hasOwnProperty(courseName)) {
                courses[courseName] = {};
                coursesCapacity[courseName] = courseCapacity;
            } else {
                coursesCapacity[courseName] += courseCapacity;
            }
        } else {
            let [usernameAndCredits, eMailAndJoinedCourse] = el.split(' with email ');
            let [eMail, joinedCourse] = eMailAndJoinedCourse.split(' joins ');
            let splittedUsernameAndCredits = usernameAndCredits.split('[');
            let username = splittedUsernameAndCredits[0];
            let creditsRaw = splittedUsernameAndCredits[1].split(']');
            let credits = Number(creditsRaw[0]);
            studentsAndCredits[username] = credits;

            if (courses.hasOwnProperty(joinedCourse)) {
                if (coursesCapacity[joinedCourse] >= 1) {
                    coursesCapacity[joinedCourse] -= 1;
                    courses[joinedCourse][username] = eMail;
                }
            }
        }
    }

    const countOfStudents = {};

    for (const key in courses) {
        const currentCourse = courses[key];
        countOfStudents[key] = 0;
        for (const student in currentCourse) {
            countOfStudents[key] += 1;
        }
    }

    let sortedCountOfStudents = Object
        .entries(countOfStudents)
        .sort((a, b) => b[1] - a[1]);

    let sortedStudentsAndCredits = Object
        .entries(studentsAndCredits)
        .sort((a, b) => b[1] - a[1]);

    for (const course of sortedCountOfStudents) {
        console.log(`${course[0]}: ${coursesCapacity[course[0]]} places left`);
        let currentCourse = courses[course[0]];

        let currentStudents = [];

        for (let el of sortedStudentsAndCredits) {
            let currentStudent = el[0];
            if (currentCourse.hasOwnProperty(currentStudent)) {
                currentStudents.push(el);
            }
        }

        for (let student of currentStudents) {
            console.log(`--- ${student[1]}: ${student[0]}, ${courses[course[0]][student[0]]}`);
        }
    }
}

// SoftUniStudents(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore']);

softUniStudents([
    'JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore'
]);
