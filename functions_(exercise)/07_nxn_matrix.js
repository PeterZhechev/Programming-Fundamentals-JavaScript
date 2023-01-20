function nXnMatrix(num) {

    let matrix = [];

    for (let i = 0; i < num; i++) {
        matrix[i] = [];
    }

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            matrix[i][j] = num;
        }
    }

    let output = '';
    for (let i = 0; i < num; i++) {
        matrix[i].join(' ');
        output += matrix[i].join(' ') + '\n';

    }
    return output;
}

let outputMatrix = nXnMatrix(7);

console.log(outputMatrix);