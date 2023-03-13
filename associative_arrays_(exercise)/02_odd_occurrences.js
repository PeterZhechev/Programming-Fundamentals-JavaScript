function oddOccurrences(input) {

    let elements = input.split(' ');
    let lowerCaseElements = [];

    for (let el of elements) {
        lowerCaseElements.push(el.toLowerCase());
    }

    let elementsInObj = {};

    for (let el of lowerCaseElements) {
        elementsInObj[el] = 0;
    }

    for (let el of lowerCaseElements) {
        for (let key in elementsInObj) {
            if (el === key) {
                elementsInObj[key] += 1;
            }
        }
    }

    let oddElements = [];

    for (let key in elementsInObj) {
        if (elementsInObj[key] % 2 !== 0) {
            oddElements.push(key);
        }
    }

    console.log(oddElements.join(' '));
}

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');