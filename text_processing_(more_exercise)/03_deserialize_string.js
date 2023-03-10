function deserializeString(arr) {

    let index = 0;
    let currentLIne = arr[index];
    let obj = {};

    while (currentLIne !== 'end') {

        let [char, indices] = currentLIne.split(':');
        indicesInArr = indices.split('/')
            .map(Number);

        for (let el of indicesInArr) {
            obj[el] = char;
        }
        currentLIne = arr[index];
        index++;
    }

    let outputArr = [];

    for (let key in obj) {
        outputArr[Number(key)] = obj[key];
    }

    return outputArr.join('');
}

console.log(deserializeString([
    'a:0/2/4/6',
    'b:1/3/5',
    'end'
]));

console.log(deserializeString(['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end']
));