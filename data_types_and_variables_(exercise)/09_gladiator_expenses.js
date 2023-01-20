function gladiator(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let total = 0;

    let trashedHelmet = 0;
    let trashedSword = 0;
    let trashedShield = 0;
    let trashedArmor = 0;

    let i = 1;

    while (i <= lostFightsCount) {

        if (i % 2 === 0 && i !== 0) {
            trashedHelmet++;

        }

        if (i % 3 === 0 && i !== 0) {
            trashedSword++;

        }

        if (i % 6 === 0 && i !== 0) {
            trashedShield++;

        }

        if (i % 12 === 0 && i !== 0) {
            trashedArmor++;
        }

        i++;

    }

    total = ((trashedHelmet * helmetPrice) + (trashedSword * swordPrice) + (trashedShield * shieldPrice) + (trashedArmor * armorPrice)).toFixed(2);

    console.log(`Gladiator expenses: ${total} aureus`);

}

gladiator(23,
    12.50,
    21.50,
    40,
    200
);