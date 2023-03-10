function makeADictionary(input) {

    // convert JSON to object
    let jsonToObj = {};
    for (line of input) {
        let currentLine = JSON.parse(line);
        for (let key in currentLine) {

            jsonToObj[key] = currentLine[key];

        }
    }

    let objEntries = Object.entries(jsonToObj);
    objEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (line of objEntries) {
        console.log(`Term: ${line[0]} => Definition: ${jsonToObj[line[0]]}`);
    }
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);

// makeADictionary([
//     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//     '{"Coffee":"test"}',
//     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
// ]);