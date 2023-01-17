function lastK(n, k) {

    const firstElement = 1;
    let sum = [];
    sum.push(firstElement);
    let currentsum = [];
    let tempSum = 0;
    let start = 0;

    while (sum.length < n) {
        if (sum.length <= k) {
            currentsum = sum;
        } else {
            start = sum.length - k;
            currentsum = sum.slice(start);
        }

        if (sum.length <= k) {
            for (let i = 0; i < sum.length; i++) {
                let currentNum = currentsum[i];
                tempSum += currentNum;
            }
        } else {
            for (let l = 0; l < k; l++) {
                let currentNum = currentsum[l];
                tempSum += currentNum;
            }
        }

        sum.push(tempSum);
        tempSum = 0;
    }

    console.log(sum.join(' '));
}

lastK(8, 2);