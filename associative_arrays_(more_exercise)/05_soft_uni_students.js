function softUniStudents(inputData) {

    function formatInputData(rawInputData) {

        const formatedInputDataArr = [];

        for (const line of rawInputData) {
            const splittedLine = line.split(' ');

            if (splittedLine.length === 2) {
                let courseNameAndCapacity = [];
                let rawCourseName = splittedLine[0];
                let rawCourseNameToArr = rawCourseName.split('');
                rawCourseNameToArr.pop();

                // final format of course name and capacity
                const courseName = rawCourseNameToArr.join('');
                const capacity = Number(splittedLine[1]);

                courseNameAndCapacity.push(courseName, capacity);
                formatedInputDataArr.push(courseNameAndCapacity);
            } else {
                let usernameInfo = [];
                let rawUsername = splittedLine[0];
                let rawUsernameToArr = rawUsername.split('');
                rawUsernameToArr.pop();
                let rawUsernameToStr = rawUsernameToArr.join('');
                let formatedUsernameToArr = rawUsernameToStr.split('[');

                const formatedUsername = formatedUsernameToArr[0];
                const userCredits = Number(formatedUsernameToArr[1]);
                const UserEmail = splittedLine[3];
                const joinedCourse = splittedLine[5];

                usernameInfo.push(formatedUsername, userCredits, UserEmail, joinedCourse);
                formatedInputDataArr.push(usernameInfo);
            }
        }

        return formatedInputDataArr;
    }

    const formatedInputData = formatInputData(inputData)

    const courseNameAndCapacity = {};
    const registeredStudents = {};
    const studentsCountInCourses = {};

    for (let formatedLine of formatedInputData) {

        if (formatedLine.length === 2) {
            const courseName = formatedLine[0];
            const capacity = formatedLine[1];

            if (!courseNameAndCapacity.hasOwnProperty(courseName)) {
                courseNameAndCapacity[courseName] = capacity;
                registeredStudents[courseName] = [];
                studentsCountInCourses[courseName] = 0;
            } else {
                courseNameAndCapacity[courseName] += capacity;
            }
        } else {
            // const formatedUsername = formatedLine[0];
            // const userCredits = formatedLine[1];
            // const UserEmail = formatedLine[2];
            const joinedCourse = formatedLine[3];

            if (registeredStudents.hasOwnProperty(joinedCourse)) {
                if (courseNameAndCapacity[joinedCourse] > 0) {
                    registeredStudents[joinedCourse].push(formatedLine);
                    studentsCountInCourses[joinedCourse]++;
                    courseNameAndCapacity[joinedCourse]--;
                }
            }
        }
    }

    let sortedStudentsCountInCourses = Object
        .entries(studentsCountInCourses)
        .sort((a, b) => b[1] - a[1]);

    for (let course of sortedStudentsCountInCourses) {
        console.log(`${course[0]}: ${courseNameAndCapacity[course[0]]} places left`);

        let currentRegisteredStudents = registeredStudents[course[0]];
        let sortedRegisteredStudents = currentRegisteredStudents.sort((a, b) => b[1] - a[1]);

        for (const student of sortedRegisteredStudents) {
            console.log(`--- ${student[1]}: ${student[0]}, ${student[2]}`);
        }
    }
}

// softUniStudents(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore']);


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

