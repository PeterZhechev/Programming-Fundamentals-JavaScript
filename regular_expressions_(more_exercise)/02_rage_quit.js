function rageQuit(inputText) {

    // let mainPattern = /(?<currentMessage>[^0-9]{1,20})(?<currentCount>[0-9]{1,2})/g;
    let mainPattern = /(?<currentMessage>\D+)(?<currentCount>[0-9]+)/g;
    let mainMatched = inputText[0].matchAll(mainPattern);
    let outputMessage = '';
    let uniqueSymbols = new Set();

    for (let el of mainMatched) {

        let currentMessage = el.groups.currentMessage;
        let currentCount = Number(el.groups.currentCount);

        for (let i = 0; i < currentCount; i++) {
            outputMessage += currentMessage;
            for (let char of currentMessage) {
                uniqueSymbols.add(char.toUpperCase());
            }
        }

    }

    console.log(`Unique symbols used: ${uniqueSymbols.size}\n${outputMessage.toUpperCase()}`);
}

// rageQuit(['aSd2&5s@1']);

rageQuit(['e-!btI17z=E:DMJ19U1Tvg VQ>11P\"qCmo.-0YHYu~o%/%b.}a[=d15fz^\"{0^/pg.Ft{W12\`aD<l&$W&)*yF1WLV9_GmTf(d0($!$\`e/{D\'xi]-~17 *%p\"%|N>zq@ %xBD18<Y(fHh\`@gu#Z#p\"Z<v13fI]\':\Iz.17*W:\mwV\`z-15g@hUYE{_$~}+X%*nytkW15']);
