function cardGame(input) {

    let inputLength = input.length;
    let obj1 = {};

    for (let i = 0; i < inputLength; i++) {
        let currentLine = input.shift().split(': ');
        let personName = currentLine.shift();
        let splittedLine = currentLine[0].split(', ');

        let isExistName = false;

        for (let key in obj1) {
            if (key === personName) {
                isExistName = true;
                break;
            }
        }

        if (isExistName === false) {
            obj1[personName] = [];
        }

        for (let key in obj1) {
            if (key === personName) {
                for (let el of splittedLine) {

                    let isExistCard = false;

                    for (let el2 of obj1[key]) {
                        if (el2 === el) {
                            isExistCard = true;
                            break;
                        }
                    }

                    if (isExistCard === false) {
                        obj1[key].push(el);
                    }
                }
            }
        }
    }

    let scores = {};


    for (let key in obj1) {
        let p = '';
        let t = '';
        let totalSum = 0;
        for (let el of obj1[key]) {
            if (el.length > 2) {
                p1 = el[0];
                p2 = el[1];
                p = p1 + p2;
                t = el[2];
            } else {
                p = el[0];
                t = el[1];
            }
            let sum = 0;

            switch (p) {

                case '2':
                    p = 2;
                    break;

                case '3':
                    p = 3;
                    break;

                case '4':
                    p = 4;
                    break;

                case '5':
                    p = 5;
                    break;

                case '6':
                    p = 6;
                    break;

                case '7':
                    p = 7;
                    break;

                case '8':
                    p = 8;
                    break;

                case '9':
                    p = 9;
                    break;

                case '10':
                    p = 10;
                    break;

                case 'J':
                    p = 11;
                    break;

                case 'Q':
                    p = 12;
                    break;

                case 'K':
                    p = 13;
                    break;

                case 'A':
                    p = 14;
                    break;
            }

            switch (t) {
                case 'S':
                    t = 4;
                    break;

                case 'H':
                    t = 3;
                    break;

                case 'D':
                    t = 2;
                    break;

                case 'C':
                    t = 1;
                    break;

            }

            sum = p * t;

            totalSum += sum;
        }

        scores[key] = totalSum;

    }

    for (let key in scores) {
        console.log(`${key}: ${scores[key]}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);