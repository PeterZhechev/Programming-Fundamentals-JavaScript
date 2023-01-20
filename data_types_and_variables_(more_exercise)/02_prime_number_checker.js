function primeNumberChecker(input) {

    let output = true;

    for (let i = 2; i < input; i++) {
        if (input % i === 0) {
            output = false;
            break;
        }
    }
    console.log(output);
}

primeNumberChecker(2);