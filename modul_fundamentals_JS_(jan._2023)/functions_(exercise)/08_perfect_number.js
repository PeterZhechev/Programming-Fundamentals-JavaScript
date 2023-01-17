function perfectNumber(num) {

    let arrNums = [];
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            arrNums.push(i);
        }
    }

    let sum = 0;
    for (let i = 0; i < arrNums.length; i++) {
        sum += Number(arrNums[i]);
    }

    if (sum === num) {
        return 'We have a perfect number!';
    } else {
        return 'It\'s not so perfect.';
    }
}

let outputFunction = perfectNumber(28);

console.log(outputFunction);