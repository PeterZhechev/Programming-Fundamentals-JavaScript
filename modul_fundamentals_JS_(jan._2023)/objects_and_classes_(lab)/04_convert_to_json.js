function test(name, lastName, hairColor) {

    let obj1 = {name, lastName, hairColor};

    console.log(JSON.stringify(obj1));
}

test('George', 'Jones', 'Brown');
