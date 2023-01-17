function rightPlace(str, char, result) {

    let res = str.replace('_', char);

    if (res === result) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

}

rightPlace('Str_ng', 'i', 'String');