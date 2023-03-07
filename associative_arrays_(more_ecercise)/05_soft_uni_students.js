function softUniStudents(inputData) {

    const courses = {};
    const infoForStudents = {};
    const registeredStudentsInAvailableCourses = {};

    for (let el of inputData) {
        let splittedEl = el.split(' ');

        if (splittedEl.length === 2) {
            let courseNameToAdd = splittedEl[0].split('');
            let removedElement = courseNameToAdd.pop();
            courseNameToAdd = courseNameToAdd.join('');
            let courseCapacityToAdd = Number(splittedEl[1]);
            if (!courses.hasOwnProperty(courseNameToAdd)) {
                courses[courseNameToAdd] = courseCapacityToAdd;
            } else if (courses.hasOwnProperty(courseNameToAdd)) {
                courses[courseNameToAdd] += courseCapacityToAdd;
            }

        } else if (splittedEl.length > 2) {
            let userNameWithCredits = splittedEl[0];
            let email = splittedEl[3];
            let course = splittedEl[5];
            let reversedNum = '';
            let reversedUsername = '';
            let isEndOfNumInfo = false;
            let counter = 0;

            for (let i = userNameWithCredits.length - 2; i >= 0; i--) {
                let currentChar = userNameWithCredits[i];

                if (currentChar === '[') {
                    isEndOfNumInfo = true;
                }

                if (isEndOfNumInfo === false) {
                    reversedNum += currentChar;
                } else {
                    counter++;
                    if (counter > 1) {
                        reversedUsername += currentChar;
                    }
                }
            }

            let userName = reversedUsername
                .split('')
                .reverse()
                .join('');

            let credits = reversedNum
                .split('')
                .reverse()
                .join('');

            infoForStudents[userName] = {};
            infoForStudents[userName]['credits'] = Number(credits);
            infoForStudents[userName]['email'] = email;

            if (courses.hasOwnProperty(course)) {
                if (courses[course] > 0) {
                    courses[course] -= 1;
                }

                if (registeredStudentsInAvailableCourses.hasOwnProperty(course)) {
                    registeredStudentsInAvailableCourses[course][userName] = userName;
                } else if (!registeredStudentsInAvailableCourses.hasOwnProperty(course)) {
                    registeredStudentsInAvailableCourses[course] = {};
                    registeredStudentsInAvailableCourses[course][userName] = userName;
                }
            }
        }

    }

    function calculateCountOfStudentsInCourses(infoAboutRegisteredStudents) {

        const studentsCount = {};

        for (const course in infoAboutRegisteredStudents) {
            let currentCourse = infoAboutRegisteredStudents[course];
            let counter = 0;
            for (const student in currentCourse) {
                counter++;
            }

            studentsCount[course] = counter;
        }

        return studentsCount;
    }

    let countedStudents = calculateCountOfStudentsInCourses(registeredStudentsInAvailableCourses)

    let sortedCountOfStudents = Object
        .entries(countedStudents)
        .sort((a, b) => b[1] - a[1]);

    for (const key in registeredStudentsInAvailableCourses) {
        let currentCourse = registeredStudentsInAvailableCourses[key];
        for (const user in currentCourse) {
            currentCourse[user] = infoForStudents[user];
        }
    }

    function printTheColectedInfo(colectedCourses, colectedInfoForStudents, colectedRegisteredStudentsInAvailableCourses, colectedSortedCountOfStudents) {

        for (let course of colectedSortedCountOfStudents) {
            const [currentCourse, studentsCount] = course;
            console.log(`${currentCourse}: ${colectedCourses[currentCourse]} places left`);

            let currentUsers = colectedRegisteredStudentsInAvailableCourses[currentCourse];
            let currentUsersAndTheirCredits = {};
            for (let key in currentUsers) {
                let currentUser = currentUsers[key];
                currentUsersAndTheirCredits[key] = currentUser.credits;
            }

            let sortedUsersByCredits = Object
                .entries(currentUsersAndTheirCredits)
                .sort((a, b) => {
                    let sorted = b[1] - a[1];

                    if (sorted === 0) {
                        sorted = a[0].localeCompare(b[0]);
                    }

                    return sorted;
                });

            for (const [key, value] of sortedUsersByCredits) {
                
            }
        }
    }

    printTheColectedInfo(courses, infoForStudents, registeredStudentsInAvailableCourses, sortedCountOfStudents);

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
