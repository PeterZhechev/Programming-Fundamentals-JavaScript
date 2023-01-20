function convertToObject(jsonStr) {
    
    let person = JSON.parse(jsonStr);
    
    for (key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');