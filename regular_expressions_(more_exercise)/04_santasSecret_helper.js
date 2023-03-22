function santasSecretHelper(input) {

    let integerKey = Number(input.shift());

    let messages = input.slice(0);
    let message = messages.shift();
    let decodedMessages = [];

    while (message !== 'end') {

        let currentDecodedMessage = '';

        for (let ch of message) {
            let currentCharToAscii = ch.charCodeAt();
            let dividedAsciiNum = currentCharToAscii - integerKey;
            let currentDecodedChar = String.fromCharCode(dividedAsciiNum);
            currentDecodedMessage += currentDecodedChar;
        }

        decodedMessages.push(currentDecodedMessage);
        message = messages.shift();
    }

    let pattern = /(\@(?<name>[A-Za-z]+))[^\@\-\!\:\>]*(!(?<behavior>[GN]{1})!)/;

    for (let message of decodedMessages) {

        let matched = message.match(pattern);

        if (matched) {
            let name = matched.groups.name;
            let behavior = matched.groups.behavior;
            if (name && behavior === 'G') {
                console.log(name);
            }
        }
    }
}

// santasSecretHelper([
//     '3',
//     'CNdwhamigyenumje$J$',
//     'CEreelh-nmguuejnW$J$',
//     'CVwdq&gnmjkvng$Q$',
//     'end'
// ]);

santasSecretHelper([
    '3',
    'N}eideidmk$\'\(mnyenmCNlpamnin$J$',
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end'
]);