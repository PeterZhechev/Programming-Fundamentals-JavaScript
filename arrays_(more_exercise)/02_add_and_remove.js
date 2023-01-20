function addAndRemove(arr) {
    let outputArr = [];
    let arrLength = arr.length;
    let currentElement = '';
    let isEmpty = true;

    for (let i = 0; i < arrLength; i++) {
        currentElement = arr[i];
        if (currentElement === 'add') {
            outputArr.push(i + 1);
        } else if (currentElement === 'remove') {
            outputArr.splice(-1);
        }
    }

    for (let j = 0; j < outputArr.length; j++) {
        isEmpty = false;
        break;
    }

    if (isEmpty === false) {
        console.log(outputArr.join(' '));
    } else if (isEmpty === true) {
        console.log('Empty');
    }

}

addAndRemove(['add', 'add', 'add', 'remove', 'remove', 'remove', 'add', 'remove', 'remove', 'add', 'add', 'remove',]);