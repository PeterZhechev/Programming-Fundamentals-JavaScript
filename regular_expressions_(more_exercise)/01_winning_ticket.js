function winningTicket(input) {

    let winningTicketLength = 20;

    let pattern6to9 = /.+([@#$^]{6,}).+([@#$^]{6,}).+/;
    // let jackpotPattern = /^(?<group1>([@#$^])\2{9})(?<group2>([@#$^])\4{9})$/;
    let jackpotPattern = /^(?<group1>([@#$^])\2{9})(?<group2>\2{10})$/;

    let splitted = input.split(', ');
    let matchJackpot = [];

    for (let el of splitted) {

        matchJackpot = el.match(jackpotPattern);

        if (matchJackpot) {
            if (matchJackpot[0].length === 20) {
                console.log(`ticket "${matchJackpot[0]}" - ${matchJackpot.groups.group1.length}${matchJackpot[0][0]} Jackpot`);
            }
        } else {
            console.log('invalid ticket');
        }
    }
}

winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey');