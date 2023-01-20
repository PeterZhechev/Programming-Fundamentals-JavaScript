function specialNumbers(inputNumber) {

    let sum = 0;
    let digits = 0;
    let specialNumber = '';

    for (let i = 1; i <= inputNumber; i++) {
        digits = i;
        sum += digits;
        let final = (digits % 10);
        let last = Math.trunc(digits / 10);
        let finalSum = (final + last);

        if (finalSum === 5 || finalSum === 7 || finalSum === 11) {
            specialNumber = 'True';
        } else {
            specialNumber = 'False';
        }
      
        console.log(`${i} -> ${specialNumber}`);
    }

}

specialNumbers(20);