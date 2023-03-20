function winningTicket(input) {

    let winningTicketLength = 10;

    let pattern = /([@#$^])\1{5,}/;

    let splitted = input.split(', ');

    for (let ticket of splitted) {
        ticket = ticket.trim();
        if (ticket.length === 20) {

            ticket = ticket.split('');
            let leftHalf = ticket.slice(0, 10).join('');
            let rightHalf = ticket.slice(10, 20).join('');
            ticket = ticket.join('');

            let leftMatched = leftHalf.match(pattern);
            let rigthMatched = rightHalf.match(pattern);

            if (leftMatched && rigthMatched) {

                if (leftMatched[0].length === winningTicketLength && rigthMatched[0].length === winningTicketLength) {
                    console.log(`ticket "${ticket}" - ${winningTicketLength}${leftMatched[1]} Jackpot!`);
                } else {

                    let currentWinningTicket = '';
                    if (leftMatched[0].length > rigthMatched[0].length) {
                        currentWinningTicket = rigthMatched[0];
                    } else {
                        currentWinningTicket = leftMatched[0];
                    }
                    console.log(`ticket "${ticket}" - ${currentWinningTicket.length}${currentWinningTicket[0]}`);
                }

            } else {
                console.log(`ticket "${ticket}" - no match`);
            }

        } else {
            console.log('invalid ticket');
        }
    }
}

// winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey');

// winningTicket('Cash$$$$$$Ca$$$$$$sh');

// winningTicket('validticketnomatch:(');

