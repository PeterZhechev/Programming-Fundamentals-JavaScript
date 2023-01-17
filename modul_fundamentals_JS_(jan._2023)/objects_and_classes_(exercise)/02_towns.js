function towns(arr) {

    let arrLength = arr.length;

    class Towns {
        constructor(town, latitude, longitude) {
            this.town = town;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }

    let count = 0;
    let output = '';

    for (let i = 0; i < arrLength; i++) {
        let currentTown = arr.shift().split(' | ');
        let town = currentTown[0];
        let latitude = Number(currentTown[1]).toFixed(2);
        let longitude = Number(currentTown[2]).toFixed(2);
        let list = new Towns(town, latitude, longitude);
        for (let key of Object.keys(list)) {
            if (count === 0) {
                output += `{ ${key}: '${list[key]}', `;
            } else if (count === 1) {
                output += `${key}: '${list[key]}', `;
            } else if (count === 2) {
                output += `${key}: '${list[key]}' }`;
            }
            count++;
        }
        count = 0;
        console.log(output);
        output = '';
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);