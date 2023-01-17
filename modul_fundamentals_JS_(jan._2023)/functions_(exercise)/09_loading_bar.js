function loadingBar(percent) {

    let tempPercent = Math.floor(percent / 10) * 10;

    let bar = [];
    bar.push('[');
    for (let i = 1; i <= 10; i++) {
        if (i <= tempPercent / 10) {
            bar.push('%');
        } else {
            bar.push('.');
        }
    }

    bar.push(']');

    if (percent < 100) {
        return `${tempPercent}% ${bar.join('')}\nStill loading...`;
    } else {
        return `100% Complete!\n[%%%%%%%%%%]`;
    }
}

let bar = loadingBar(43);

console.log(bar);