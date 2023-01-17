function searchForANumber (arr1, arr2) {

    let num1 = arr2[0];
    // The first number represents the number of elements 
    // you have to take from the first array (starting from the first one).

    let num2 = arr2[1];
    // The second number represents the number of elements 
    // you have to delete from the numbers you took (starting from the first one).

    let num3 = arr2[2];
    // The third number is the number we search 
    // in our collection after the manipulations. 

    let takenElements = arr1.slice(0, num1)
    takenElements.splice(0, num2);

    let indexTofind = [];

    while (takenElements.includes(num3)) {
        let currentIndex = takenElements.indexOf(num3);
        indexTofind.push(currentIndex);
        takenElements.splice(currentIndex, 1);      
    }

    console.log(`Number ${num3} occurs ${indexTofind.length} times.`);
}

searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);