function extractEmails(inputText) {

    let pattern = /(?<valid>^[A-Za-z0-9]+[.\-_]*[A-Za-z0-9]+@[A-Za-z\-]+[.][A-Za-z\-]+[.A-Za-z\-]*)\b/g;

    let textArr = inputText.split(' ');

    for (let currentText of textArr) {

        let match = currentText.matchAll(pattern);
        
        for (let matched of match) {
            console.log(matched.groups.valid);
        }
    }
}

extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.');


