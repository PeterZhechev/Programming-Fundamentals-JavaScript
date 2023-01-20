function solve(num, inputArr) {

    let output = '';
    let newArr = [];
    let i = 1;

    while (i <= num) {
        newArr = inputArr[num - i];
        if (i < num) {
            output += newArr + ' ';
        } else if (i = num) {
            output += newArr;
        }
        i++;
    }

    console.log(output);

}

solve(4, [-1, 20, 99, 5]);