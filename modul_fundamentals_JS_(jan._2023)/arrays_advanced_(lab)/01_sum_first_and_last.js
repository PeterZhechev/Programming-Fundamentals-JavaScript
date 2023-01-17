function sum(arr) {

    let firstElement = Number(arr[0]);
    let lastElement = Number(arr[arr.length - 1]);
    let output = firstElement + lastElement;
    return output;
}

let result = sum(['20', '30', '40']);

console.log(result);