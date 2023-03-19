function winningTicket(input) {
    
    let winningTicketLength = 20;

    let pattern6to9 = /.+([@#$^]{6,}).+([@#$^]{6,}).+/;
    let jackpotPattern = /([@#$^]{6,10})([@#$^]{6,10})/;

    let splitted = input.split(', ');
    let matchJackpot = [];

    for (let el of splitted) {
        matchJackpot = el.match(jackpotPattern);
        if (matchJackpot) {
            if (match[0].length === 20) {
                console.log(`ticket "${matchJackpot[0]}" - ${matchJackpot[1].length}${matchJackpot[0][0]} Jackpot`);
            }
        } else {
            console.log('invalid ticket');
        }
    }
}

winningTicket('$$$$$$$$$$$$$$$$$$$$f, aabb  , th@@@@@@eemo@@@@@@ey');