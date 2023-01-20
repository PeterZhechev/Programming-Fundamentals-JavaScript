function arrayRotation(array, numberOfRotations) {

    let outputArr = [];
    let count = 1;

    for (let index = 0; index < array.length + numberOfRotations; index++) {

        if (index % array.length === 0 && index !== 0) {
            index = 0;
        }

        if (count > numberOfRotations) {
            outputArr.push(array[index]);
            if (outputArr.length === array.length) {
                break;
            }
        }

        count++;
    }
    console.log(outputArr.join(' '));
    
}

arrayRotation([51, 47, 32, 61, 21], 2);