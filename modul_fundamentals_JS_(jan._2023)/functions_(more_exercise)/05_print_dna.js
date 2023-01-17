function printDna(dnaLength) {

    let index = 0;
    let sequenceIndex1 = 0;
    let sequenceIndex2 = 1;
    let dnaSequence = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];

    while (index < dnaLength) {

        if (index < dnaLength) {
            console.log(`**${dnaSequence[sequenceIndex1]}${dnaSequence[sequenceIndex2]}**`);
        } else {
            break;
        }

        index++;
        sequenceIndex1 += 2;
        sequenceIndex2 += 2;
        if (sequenceIndex1 >= dnaSequence.length) {
            sequenceIndex1 -= 10;
        }

        if (sequenceIndex2 >= dnaSequence.length) {
            sequenceIndex2 -= 10;
        }
        if (index < dnaLength) {
            console.log(`*${dnaSequence[sequenceIndex1]}--${dnaSequence[sequenceIndex2]}*`);
        } else {
            break;
        }

        index++;
        sequenceIndex1 += 2;
        sequenceIndex2 += 2;
        if (sequenceIndex1 >= dnaSequence.length) {
            sequenceIndex1 -= 10;
        }

        if (sequenceIndex2 >= dnaSequence.length) {
            sequenceIndex2 -= 10;
        }
        if (index < dnaLength) {
            console.log(`${dnaSequence[sequenceIndex1]}----${dnaSequence[sequenceIndex2]}`);
        } else {
            break;
        }

        index++;
        sequenceIndex1 += 2;
        sequenceIndex2 += 2;
        if (sequenceIndex1 >= dnaSequence.length) {
            sequenceIndex1 -= 10;
        }

        if (sequenceIndex2 >= dnaSequence.length) {
            sequenceIndex2 -= 10;
        }
        if (index < dnaLength) {
            console.log(`*${dnaSequence[sequenceIndex1]}--${dnaSequence[sequenceIndex2]}*`);
        } else {
            break;
        }

        index++;
        sequenceIndex1 += 2;
        sequenceIndex2 += 2;
        if (sequenceIndex1 >= dnaSequence.length) {
            sequenceIndex1 -= 10;
        }

        if (sequenceIndex2 >= dnaSequence.length) {
            sequenceIndex2 -= 10;
        }
    }
}

printDna(10);