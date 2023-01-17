function digitsWithWords(word) {

    let output = 0;

    switch (word) {
        case 'zero':
            output = 0;
            break;

        case 'one':
            output = 1;
            break;

        case 'two':
            output = 2;
            break;

        case 'three':
            output = 3;
            break;

        case 'four':
            output = 4;
            break;

        case 'five':
            output = 5;
            break;

        case 'six':
            output = 6;
            break;

        case 'seven':
            output = 7;
            break;

        case 'eight':
            output = 8;
            break;

        case 'nine':
            output = 9;
            break;

        case 'ten':
            output = 10;
            break;
    }

    console.log(output);
}

digitsWithWords('nine');