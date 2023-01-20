function solve(arr) {

    let tempNum1 = 0;
    let tempNum2 = 0;
    let sum = [];
    let nums = [];
    let finalSum = 0;

    for (let i = 0; i < arr.length - 1; i++) {

        tempNum1 = arr[i];
        tempNum2 = arr[i + 1];
        if (i === arr.length - 1) {
            tempNum2 = 0;
        }

        sum = tempNum1 + tempNum2;

        nums[i] = sum;

        if (i === arr.length - 2) {
            arr = nums;
            nums = [];
            i = -1;
        }
    }

    finalSum = Number(arr);

    console.log(finalSum);
}

solve([5, 0, 4, 1]);