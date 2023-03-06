function arenaTier(inputData) {

    let gladiatorPool = {};

    for (let el of inputData) {

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
    'Peter -> BattleCry -> 400',
    'Peter -> test -> 399',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar',
]);