function pointsValidation(arrOfNumbers) {

    let x1 = Number(arrOfNumbers[0]);
    let y1 = Number(arrOfNumbers[1]);
    let x2 = Number(arrOfNumbers[2]);
    let y2 = Number(arrOfNumbers[3]);

    function firstValidator() {
        let firstTest = Math.sqrt(((0 - x1) ** 2) + ((0 - y1) ** 2));
        if (firstTest % 1 === 0) {
            return `{${x1}, ${y1}} to {0, 0} is valid`;
        } else {
            return `{${x1}, ${y1}} to {0, 0} is invalid`;
        }
    }

    function secondValidator() {
        let secondTest = Math.sqrt(((x2 - 0) ** 2) + ((y2 - 0) ** 2));
        if (secondTest % 1 === 0) {
            return `{${x2}, ${y2}} to {0, 0} is valid`;
        } else {
            return `{${x2}, ${y2}} to {0, 0} is invalid`;
        }
    }

    function thirdValidator() {
        let thirdTest = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
        if (thirdTest % 1 === 0) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
        } else {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
        }
    }

    let isValid1 = firstValidator();
    let isValid2 = secondValidator();
    let isValid3 = thirdValidator();

    return `${isValid1}\n${isValid2}\n${isValid3}`
    // console.log(isValid1);
    // console.log(isValid2);
    // console.log(isValid3);

}

let validator = pointsValidation([3, 0, 0, 4]);

console.log(validator);