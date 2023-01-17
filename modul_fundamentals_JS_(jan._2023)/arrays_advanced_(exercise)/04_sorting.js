function sorting(arr) {

    let index = 0;
    let index2 = 0;
    let index3 = 0;
    let arrLength = arr.length;
    let sorted = [];
    let smallest = Number.MAX_SAFE_INTEGER;

    while (index < arrLength) {

        index2 = 0;
        smallest = Number.MAX_SAFE_INTEGER;
        while (index2 < arr.length) {
            let currentNum = Number(arr[index2]);
            if (currentNum < smallest) {
                smallest = currentNum;
            }

            index2++;
        }

        index3 = 0;
        while (index3 < arr.length) {
            let currentNum3 = arr[index3];
            if (currentNum3 === smallest) {
                arr.splice(index3, 1);
                break;
            }

            index3++;
        }
        index++;
        sorted.push(smallest);
    }

    
    function specialSorting() {

        let specialSortedArr = [];
        let index = 0;
        while (index < arrLength / 2) {
            let end = sorted.pop();
            let start = sorted.shift();
            specialSortedArr.push(end);
            specialSortedArr.push(start);
            index++;
        }

        return specialSortedArr.join(' ');
    }
    let specialSolve = specialSorting();
    
    console.log(specialSolve);
}

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
