function rageQuit(inputText) {
    
    let toUpperCaseInputText = inputText.toUpperCase();

    let mainPattern = /[^0-9]{1,20}[0-9]{1,2}/g;

    let mainMatched = toUpperCaseInputText.matchAll(mainPattern);

    for (let el of mainMatched) {
        console.log(el);
    }
    console.log(mainMatched);

}

rageQuit('aSd2&5s@1');