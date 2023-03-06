function arenaTier(inputData) {

    let gladiatorPool = {};
    let tier = {};

    for (let el of inputData) {

        if (el === 'Ave Cesar') {
            break;
        }

        let [gladiatorInput, technique, skill] = el.split(' -> ');
        let [gladiator1, gladiator2] = el.split(' vs ');

        if (technique) {
            if (!gladiatorPool.hasOwnProperty(gladiatorInput)) {
                gladiatorPool[gladiatorInput] = {};
                gladiatorPool[gladiatorInput][technique] = Number(skill);
            } else {
                if (gladiatorPool[gladiatorInput].hasOwnProperty(technique)) {
                    if (gladiatorPool[gladiatorInput][technique] < Number(skill)) {
                        gladiatorPool[gladiatorInput][technique] = Number(skill);
                    }
                } else if (!gladiatorPool[gladiatorInput].hasOwnProperty(technique)) {
                    gladiatorPool[gladiatorInput][technique] = Number(skill);
                }
            }
        } else if (gladiator2) {
            tier['gladiator1'] = gladiator1;
            tier['gladiator2'] = gladiator2;
            if (gladiatorPool.hasOwnProperty(tier['gladiator1'])) {
                if (gladiatorPool.hasOwnProperty(tier['gladiator2'])) {
                    let firstGladiator = gladiatorPool[tier['gladiator1']];
                    let secondGladiator = gladiatorPool[tier['gladiator2']];

                    for (let key1 in firstGladiator) {
                        for (let key2 in secondGladiator) {
                            if (key1 === key2) {
                                let lostTheBattle = '';
                                let firstGladiatorSkill = firstGladiator[key1];
                                let secondGladiatorSkill = secondGladiator[key2];
                                if (firstGladiatorSkill > secondGladiatorSkill) {
                                    lostTheBattle = tier['gladiator2'];
                                    delete gladiatorPool[lostTheBattle];
                                } else if (secondGladiatorSkill > firstGladiatorSkill) {
                                    lostTheBattle = tier['gladiator1'];
                                    delete gladiatorPool[lostTheBattle];
                                }
                            }
                        }
                    }
                }
            }
        }

        tier = {};
    }

    let gladiatorsOrderedByTotalSkill = {};

    for (let key1 in gladiatorPool) {
        let currentGladiator = gladiatorPool[key1];
        let totalSkillQuantity = 0;
        for (key2 in currentGladiator) {
            let currentSkillQuantity = currentGladiator[key2];
            totalSkillQuantity += currentSkillQuantity;
        }

        gladiatorsOrderedByTotalSkill[key1] = totalSkillQuantity;
    }

    let sortedGladiatorsOrderedByTotalSkill = Object
        .entries(gladiatorsOrderedByTotalSkill)
        .sort((a, b) => {
            let sorted = b[1] - a[1];

            if (sorted === 0) {
                sorted = a[0].localeCompare(b[0]);
            }

            return sorted;
        });

    for (let [key, value] of sortedGladiatorsOrderedByTotalSkill) {
        console.log(`${key}: ${value} skill`);

        let currentGladiatorsSkills = gladiatorPool[key];

        let sortedCurrentGladiatorsSkills = Object
            .entries(currentGladiatorsSkills)
            .sort((a, b) => {
                let sorted = b[1] - a[1];

                if (sorted === 0) {
                    sorted = a[0].localeCompare(b[0]);
                }

                return sorted;
            });

        for (let [technique, skill] of sortedCurrentGladiatorsSkills) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }
}

// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar',
// ]);

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar',
]);
