function bombNumbers(sequenceOfNumbers, specialBombNumberAndItsPower) {

    let specialBombNumber = specialBombNumberAndItsPower[0];
    let power = specialBombNumberAndItsPower[1];
    let sum = 0;
    let index = 0;

    while (sequenceOfNumbers.includes(specialBombNumber)) {
        
        while (index < sequenceOfNumbers.length) {
            let currentElement = sequenceOfNumbers[index];
            if (currentElement === specialBombNumber) {
                break;
            }
            index++;
        }

        if ((index - power) > 0) {
            sequenceOfNumbers.splice((index - power), ((power * 2) + 1));
        } else {
            sequenceOfNumbers.splice(0, ((power * 2) + 1) - Math.abs(index - power));
        }
        
        index = 0;
    }

    for (let el of sequenceOfNumbers) {
        sum += el;
    }
    console.log(sum);
}

bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);