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
    // END of: get coming guests

    let outputGuests = {};


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