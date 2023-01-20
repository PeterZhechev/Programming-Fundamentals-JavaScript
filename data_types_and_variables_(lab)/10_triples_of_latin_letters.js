function triples(input) {

    let inputNumber = Number(input);
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;

    while (true) {
        num2 = 0;
        num1++;
        if (num1 === inputNumber + 1) {
            break;
        }

        while (true) {
            num3 = 0;
            num2++;
            if (num2 === inputNumber + 1) {
                break;
            }

            while (true) {

                num3++;
                if (num3 === inputNumber + 1) {
                    break;
                }
                console.log(String.fromCharCode(num1 + 96, num2 + 96, num3 + 96));
            }
        }
    }

}

triples(3);