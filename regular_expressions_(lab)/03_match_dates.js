function matchDates(input) {

    let pattern = /\b(?<day>[0-9]{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>[0-9]{4})\b/g;
    let result = [...input[0].matchAll(pattern)];
    for (let el of result) {
        let currentGroup = el.groups;
        console.log(`Day: ${currentGroup.day}, Month: ${currentGroup.month}, Year: ${currentGroup.year}`);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);