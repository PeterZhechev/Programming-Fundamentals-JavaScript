function sortArrByTwoCriteria(arr) {

    let sortedByLength = sortByLength();
    function sortByLength() {
        let smallest = Number.MAX_SAFE_INTEGER;
        let tempElement = '';
        let newArr = [];
        let index = 0;
        let arrLength = arr.length;

        while (index < arrLength) {

            for (let i = 0; i < arr.length; i++) {
                let currentElement = arr[i];
                if (currentElement.length < smallest) {
                    smallest = Number(currentElement.length);
                    tempElement = currentElement;
                }
            }

            newArr.push(tempElement);
            smallest = Number.MAX_SAFE_INTEGER;
            for (let j = 0; j < arr.length; j++) {
                let currentElement2 = arr[j];
                if (currentElement2 === tempElement) {
                    arr.splice(j, 1);
                    break;
                }
            }

            tempElement = '';
            index++;
        }

        return newArr;
    }

    function sortByName(sortedArr) {
        let tempArr = [];
        let count = 0;
        let count2 = 0;
        let finalArr = [];
        let index = 0;

        while (index < sortedArr.length) {
            let currentElement = sortedArr[index];
            tempArr.push(currentElement);
            for (let j = 0; j < sortedArr.length; j++) {
                let currentElement2 = sortedArr[j];
                if (currentElement.length === currentElement2.length) {
                    count++;
                }

                if (count > 1 && currentElement.length === currentElement2.length) {
                    tempArr.push(currentElement2);
                    count2++;
                }
            }

            tempArr = tempArr.sort();

            for (let i = 0; i < tempArr.length; i++) {
                let currentElement = tempArr[i];
                finalArr.push(currentElement);
            }

            if (count2 > 0) {
                index += count2;
                index++;
            } else {
                index++;
            }
            count = 0;
            count2 = 0;
            tempArr = [];
        }

        return finalArr;
    }
    let sortedByName = sortByName(sortedByLength);

    for (let i = 0; i < sortedByName.length; i++) {
        let currentElement = sortedByName[i];
        console.log(currentElement);
    }
}

sortArrByTwoCriteria(['alpha', 'beta', 'gamma']);
