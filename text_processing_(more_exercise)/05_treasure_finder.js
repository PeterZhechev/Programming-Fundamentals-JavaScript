function treasureFinder(input) {

    let key = input.shift().split(' ').map(Number);
    let count = 0;
    let currentMessage = '';
    let messages = [];

    let line = input.shift();

    while (line !== 'find') {
        count = 0;

        for (let char of line) {
            currentMessage += String.fromCharCode((char.charCodeAt() - key[count]));
            count++;
            if (count === key.length) {
                count = 0;
            }

        }

        messages.push(currentMessage);
        line = input.shift();
    }

    let newMap = new Map;

    for (let line of messages) {
        let splitted = line.split('at').join('').split('&');
        let removed = splitted.shift();

        while (splitted.length > 0) {
            let type = splitted.shift();
            let coordinates = splitted.shift().split('<').pop().split('>').shift();
            newMap.set(coordinates, type);
        }
    }

    for (let [coordinates, type] of [...newMap.entries()]) {
        console.log(`Found ${type} at ${coordinates}`);
    }
}

// treasureFinder([
//     "1 2 1 3",
//     "ikegfp'jpne)bv=41P83X@",
//     "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
//     "find"]);

treasureFinder(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]
);