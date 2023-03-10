function serializeString(arr) {

    let obj = {};

    for (let index = 0; index < arr[0].length; index++) {
        let currenChar = arr[0][index];
        if (!obj.hasOwnProperty(currenChar)) {
            obj[currenChar] = [];
            obj[currenChar].push(index);
        } else {
            obj[currenChar].push(index);
        }
    }

    for (let key in obj) {
        let currenValue = obj[key];
        console.log(`${key}:${currenValue.join('/')}`);
    }
}

// serializeString(["abababa"]);

serializeString(["avjavamsdmcalsdm"]);