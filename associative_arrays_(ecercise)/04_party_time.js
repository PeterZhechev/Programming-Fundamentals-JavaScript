function partyTime(input) {

    let listWithTheGuests = [];
    let comingGuests = [];

    // get list with guests
    for (let guest of input) {
        if (guest !== 'PARTY') {
            listWithTheGuests.push(guest);
        } else if (guest === 'PARTY') {
            break;
        }
    }
    // END of: get list with guests

    // get coming guests
    let isParty = false;
    for (let guest of input) {
        if (guest === 'PARTY') {
            isParty = true;
        }

        if (isParty) {
            comingGuests.push(guest);
        }

    }

    comingGuests.shift();

    let listWithTheGuestsObj = {};
    let comingGuestsObj = {};
    
    for (let i = 0; i < comingGuests.length; i++) {
        let currentCommingGuest = comingGuests[i];
        for (let j = 0; j < listWithTheGuests.length; j++) {
            let currentGuestInList = listWithTheGuests[j];
            if (currentCommingGuest === currentGuestInList) {
                listWithTheGuests[j] = 'IN';
                break;
            }
        }
    }

    let guestsCount = 0;
    let vipGuests = [];
    let regularGuests = [];

    for(let el of listWithTheGuests) {
        let guestType = el[0];
        if (el !== 'IN') {
            guestsCount++;
            if (guestType >= 0) {
                vipGuests.push(el);
            } else {
                regularGuests.push(el);
            }
        }
    }

    let sorted = vipGuests.concat(regularGuests);
    console.log(guestsCount);
    for (let el of sorted) {
        console.log(el);
    }
}

partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);

// partyTime(['m8rfQBvl',
// 'fc1oZCE0',
// 'UgffRkOn',
// '7ugX7bm0',
// '9CQBGUeJ',
// '2FQZT3uC',
// 'dziNz78I',
// 'mdSGyQCJ',
// 'LjcVpmDL',
// 'fPXNHpm1',
// 'HTTbwRmM',
// 'B5yTkMQi',
// '8N0FThqG',
// 'xys2FYzn',
// 'MDzcM9ZK',
// 'PARTY',
// '2FQZT3uC',
// 'dziNz78I',
// 'mdSGyQCJ',
// 'LjcVpmDL',
// 'fPXNHpm1',
// 'HTTbwRmM',
// 'B5yTkMQi',
// '8N0FThqG',
// 'm8rfQBvl',
// 'fc1oZCE0',
// 'UgffRkOn',
// '7ugX7bm0',
// '9CQBGUeJ'
// ]);