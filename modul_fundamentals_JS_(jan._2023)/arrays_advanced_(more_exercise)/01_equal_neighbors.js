function EqualNeighbors(arr) {

    let xEqual = 0;
    let yEqual = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentArr = arr[i];
        for (let j = 0; j < currentArr.length - 1; j++) {
            let currentElement = currentArr[j];
            let nextCurrentElement = currentArr[j + 1];
            if (currentElement === nextCurrentElement) {
                xEqual++;
            }
        }
    }

    for (let k = 0; k < arr.length - 1; k++) {
        let currentArrY = arr[k];
        let nextCurrentArrY = arr[k + 1]
        let longest = Math.max(currentArrY.length, nextCurrentArrY.length);
        for (let l = 0; l < longest; l++) {
            let currentElementY = currentArrY[l];
            let nextCurrentElementY = nextCurrentArrY[l];
            if (currentElementY === nextCurrentElementY) {
                yEqual++;
            }
        }
    }

    console.log(xEqual + yEqual);
}

EqualNeighbors([
    ['test', 'yo', 'yo', 'ho'],
    ['well', 'done', 'no', '6'],
    ['not', 'done', 'yet', '5']]
);