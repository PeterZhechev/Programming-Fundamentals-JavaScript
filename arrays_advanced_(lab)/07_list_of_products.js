function listOfProducts(listOfProducts) {
    
    let newOrderOfProducts = listOfProducts.sort();
    let result = '';

    let index = 1;
    while (index <= newOrderOfProducts.length) {
        result += `${index}.${newOrderOfProducts[index - 1]}\n`
        index++;
    }

    return result;
}

let list = listOfProducts(['apple', 'Apple', 'apple', '45Appl90e', '45Appl91e', 'grape', 'Grape', '3', 5, 5, 3, 'tomatto', 'Tomatto']);

console.log(list);