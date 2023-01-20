function DistinctArray(arrOfNumbers) {

    let index = 0;
    let index2 = 0;
    let count = 0;

    while (index < arrOfNumbers.length) {
        let currentNum = arrOfNumbers[index];
        count = 0;
        index2 = 0;
        while (index2 < arrOfNumbers.length) {
            let currentNum2 = arrOfNumbers[index2];
            if (currentNum === currentNum2) {
                count++;
                if (count > 1) {
                    arrOfNumbers.splice(index2, 1);
                    count = 0;
                    index2 = 0;
                    continue;
                }
            }
            index2++;
        }
        index++;
    }
    console.log(arrOfNumbers.join(' '));
}

DistinctArray([0, 0, 0, 1, 1, 1, 1, 1]);