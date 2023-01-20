function storeProvision(currentStock, ordered) {

    let currentStockList = [];
    let orderedList = [];
    let tempList = [];

    for (let i = 0; i < currentStock.length; i++) {
        let currentEl = currentStock[i];
        if (i % 2 !== 0) {
            currentEl = Number(currentStock[i]);
        }
        tempList.push(currentEl);
        if (i % 2 !== 0) {
            currentStockList.push(tempList);
            tempList = [];
        }
    }

    let tempList2 = [];
    for (let i = 0; i < ordered.length; i++) {
        let currentEl = ordered[i];
        if (i % 2 !== 0) {
            currentEl = Number(ordered[i]);
        }
        tempList2.push(currentEl);
        if (i % 2 !== 0) {
            orderedList.push(tempList2);
            tempList2 = [];
        }
    }

    let currentSum = 0;
    let totalList = currentStockList.slice(0);
    let alreadyIn = [];

    for (let i = 0; i < orderedList.length; i++) {
        let currentEl1 = orderedList[i];
        let isIn = false;
        for (let j = 0; j < currentStockList.length; j++) {
            let currentEl2 = currentStockList[j];
            if (currentEl1[0] === currentEl2[0]) {
                isIn = true;
            }
        }

        if (isIn === false) {
            totalList.push(currentEl1);
        } else {
            alreadyIn.push(currentEl1);
        }
    }

    let totalListLength = totalList.length;
    let sum = 0;

    for (let i = 0; i < alreadyIn.length; i++) {
        let currentEl3 = alreadyIn[i];
        for (let j = 0; j < totalListLength; j++) {
            let currentEl4 = totalList[j];
            if (currentEl3[0] === currentEl4[0]) {
                sum = currentEl3[1] + currentEl4[1];
                let updatedEl = [];
                updatedEl.push(currentEl3[0]);
                updatedEl.push(sum);
                totalList.splice(j, 1, updatedEl);
            }
        }
    }

    // print the list
    for (let i = 0; i < totalListLength; i++) {
        let currentEl = totalList[i];
        console.log(`${currentEl[0]} -> ${currentEl[1]}`);
    }
}

storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]    
);

