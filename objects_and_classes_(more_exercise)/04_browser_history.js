function browserHistory(obj, arr) {

    for (el of arr) {
        let splitted = el.split(' ');
        let command = splitted[0];
        let siteName = splitted[1];

        switch (command) {
            case 'Open':
                obj['Open Tabs'].push(siteName);
                obj['Browser Logs'].push(`Open ${siteName}`)
                break;

            case 'Close':
                if (obj['Open Tabs'].includes(siteName)) {
                    let findIndex = obj['Open Tabs'].indexOf(siteName);
                    let currentClosedTab = obj['Open Tabs'][findIndex]; 5
                    obj['Browser Logs'].push(`Close ${currentClosedTab}`);
                    obj['Recently Closed'].push(currentClosedTab);
                    obj['Open Tabs'].splice(findIndex, 1);
                }
                break;

            case 'Clear':
                obj['Browser Logs'] = [];
                obj['Recently Closed'] = [];
                obj['Open Tabs'] = [];
                break;

        }
    }


    console.log(obj['Browser Name']);
    console.log(`Open Tabs: ${obj['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${obj['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${obj['Browser Logs'].join(', ')}`);
}

browserHistory({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    [
        "Close Facebook",
        "Open StackOverFlow",
        "Open Google"
    ]);


// browserHistory({
//     "Browser Name": "Mozilla Firefox",
//     "Open Tabs": ["YouTube"],
//     "Recently Closed": ["Gmail", "Dropbox"],
//     "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
// },
//     ["Open Wikipedia", "Clear History and Cache", "Open Twitter"
//     ]);