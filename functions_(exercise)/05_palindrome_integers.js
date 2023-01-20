function palindromeIntegers(arrOfNumbers) {

    let arrOfNumbersLength = arrOfNumbers.length;
    let numsInArr = [];

    for (let i = 0; i < arrOfNumbersLength; i++) {
        numsInArr[i] = [];
    }

    for (let j = 0; j < arrOfNumbersLength; j++) {
        let currentNumbers = arrOfNumbers[j];
        let currentNumbersToString = currentNumbers.toString();
        let splitedNumbers = currentNumbersToString.split('');

        for (let k = 0; k < splitedNumbers.length; k++) {
            numsInArr[j][k] = splitedNumbers[k];
        }
    }

    for (let l = 0; l < numsInArr.length; l++) {
        let isPalindrome = false;
        let currentArrOfNumbers = numsInArr[l];
        if (currentArrOfNumbers.length === 1) {
            isPalindrome = true;
            console.log(isPalindrome);
            continue;
        }
        let countUp = 0;
        let countDown = currentArrOfNumbers.length - 1;
        let currentLength = Math.floor(currentArrOfNumbers.length / 2);

        for (let m = 0; m < currentLength; m++) {
            let ascending = Number(currentArrOfNumbers[countUp]);
            let descending = Number(currentArrOfNumbers[countDown]);
            countUp++;
            countDown--;
            if (ascending === descending) {
                isPalindrome = true;
                if (m === currentLength - 1) {
                    console.log(isPalindrome);
                    break;
                }
            } else {
                isPalindrome = false;
                console.log(isPalindrome);
                break;
            }
        }
    }
}

palindromeIntegers([32, 2, 232, 1010]);