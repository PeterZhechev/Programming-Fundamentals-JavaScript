function armies(input) {

    let currentElement = input.shift();
    let leaders = {};
    let isLastElement = 0;

    while (input.length > 0 || isLastElement === 1) {

        let splitted = currentElement.split(' ');

        if (splitted[splitted.length - 1] === 'arrives') {
            splitted.pop();
            let joined = splitted.join(' ');
            leaders[joined] = {};
            currentElement = input.shift();
            if (input.length === 0) {
                isLastElement++;
            }
            continue;
        } else if (splitted[splitted.length - 1] === 'defeated') {
            splitted.pop();
            let joined = splitted.join(' ');
            delete leaders[joined];
            currentElement = input.shift();
            if (input.length === 0) {
                isLastElement++;
            }
            continue;
        }

        let splittedAddTheArmy = currentElement.split(': ');

        if (splittedAddTheArmy[1]) {
            let leaderAddTheArmy = splittedAddTheArmy.shift();
            if (leaders.hasOwnProperty(leaderAddTheArmy)) {
                [armyName, armyCount] = splittedAddTheArmy[0].split(', ');
                let currentLeader = leaders[leaderAddTheArmy];
                currentLeader[armyName] = Number(armyCount);
                currentElement = input.shift();
                if (input.length === 0) {
                    isLastElement++;
                }
                continue;
            } else {
                currentElement = input.shift();
                if (input.length === 0) {
                    isLastElement++;
                }
                continue;
            }
        }

        let splittedAddCountToArmy = currentElement.split(' + ');
        if (splittedAddCountToArmy[1]) {
            let armyName = splittedAddCountToArmy[0];
            let armyCount = Number(splittedAddCountToArmy[1]);
            let isExist = false;
            for (let leader in leaders) {
                let currentLeader = leaders[leader];
                for (let army in currentLeader) {
                    if (army === armyName) {
                        currentLeader[army] += armyCount;
                        currentElement = input.shift();
                        isExist = true;
                        break;
                    }
                }

                if (isExist) {
                    break;
                }
            }

            if (isExist === false) {
                currentElement = input.shift();
            }
        }

        if (input.length === 0) {
            isLastElement++;
        }
    }

    let leadersArr = [];
    let currentLeaderArr = [];
    let index = 0;

    for (let leader in leaders) {
        let currentLeader = leaders[leader];
        currentLeaderArr.push(leader);
        leadersArr.push(currentLeaderArr);
        currentLeaderArr = [];
        let totalArmyCount = 0;
        for (let army in currentLeader) {
            let currentArmy = currentLeader[army];
            totalArmyCount += currentArmy;
        }
        
        currentLeader.totalArmyCount = totalArmyCount;
        leadersArr[index].push(totalArmyCount);
        index++;
    }

    let sortedArmiesByTotalArmyCount = leadersArr.sort((a, b) => b[1] - a[1]);
    
    for (let el of sortedArmiesByTotalArmyCount) {
        let currentLeader = el[0];
        let currentLeadersArmies = leaders[el[0]];
        let currentTotalArmyCount = currentLeadersArmies.totalArmyCount;
        delete currentLeadersArmies.totalArmyCount;
        console.log(`${currentLeader}: ${currentTotalArmyCount}`);
        let currentLeadersArmiesToArr = Object.entries(currentLeadersArmies);
        let sortedCurrentLeadersArmies = currentLeadersArmiesToArr.sort((a, b) => b[1] - a[1]);
        for (let el of sortedCurrentLeadersArmies) {
            console.log(`>>> ${el[0]} - ${el[1]}`);
        }
    }
}

armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);

// armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])