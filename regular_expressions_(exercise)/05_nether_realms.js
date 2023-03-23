function netherRealms(input) {

    let demonNames = input.split(/,[ ]*/);

    let healthPattern = /[^0-9\+\-\*\/\.]/g;
    let demonsNamePattern = /[^ ,]/g;
    let damagePatternNum = /[+\-]*[0-9]*[.]*[0-9]+/g;
    let damagePatternChar = /[*\/]/g;
    let demons = {};

    for (let name of demonNames) {

        let matchedName = name.match(demonsNamePattern).join('');
        name = matchedName;

        let matchedHealth = name.match(healthPattern);
        let matchedDamageNum = name.match(damagePatternNum);
        let matchedDamageChar = name.match(damagePatternChar);

        let currentDemonsHealth = 0;
        let currentDemonsDamage = 0;

        if (matchedHealth)
        for (let char of matchedHealth) {
            let currentAsciiNum = char.charCodeAt();
            currentDemonsHealth += currentAsciiNum;
        }

        if (matchedDamageNum)
        for (let num of matchedDamageNum) {
            currentDemonsDamage += Number(num);
        }

        if (matchedDamageChar)
        for (let char of matchedDamageChar) {
            if (char === '*') {
                currentDemonsDamage *= 2;
            } else if (char === '/') {
                currentDemonsDamage /= 2;
            }
        }

        let currentDemonsHealthAndDamage = {};
        currentDemonsHealthAndDamage.health = currentDemonsHealth;
        currentDemonsHealthAndDamage.damage = currentDemonsDamage;

        demons[name] = currentDemonsHealthAndDamage;
    }
    
    function sortNames(unsortedNames) {
        
        let sortedNames = Object
        .entries(unsortedNames)
        .sort((a, b) => a[0].localeCompare(b[0]));

        return sortedNames;
    }

    let sortedNames = sortNames(demons);

    for (let sortedName of sortedNames) {

        let currentName = sortedName[0];
        let currentHealthAndDamage = sortedName[1];
        let currentHealth = currentHealthAndDamage.health;
        let currentDamage = currentHealthAndDamage.damage;

        console.log(`${currentName} - ${currentHealth} health, ${currentDamage.toFixed(2)} damage`);
    }
}

// netherRealms('M3ph-0.5s-0.5t0.0**');

netherRealms('M3ph1st0**, Azazel');

// netherRealms('Gos/ho');

