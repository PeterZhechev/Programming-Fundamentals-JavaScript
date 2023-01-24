function convertToJson(name, lastName, hairColor) {

    let obj1 = {name, lastName, hairColor};

    console.log(JSON.stringify(obj1));
}

convertToJson('George', 'Jones', 'Brown');
