function GladiatorInventory(input) {

    let inventory = input.shift().split(' ');
    let index = 0;
    let inputLength = input.length;

    while (index < inputLength) {
        let currentCommandandItem = input[index];
        let splittedCurrentCommandandItem = currentCommandandItem.split(' ');
        let command = splittedCurrentCommandandItem[0];
        let item = splittedCurrentCommandandItem[1];

        switch (command) {
            case 'Buy':
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }

                break;
            case 'Trash':
                if (inventory.includes(item)) {
                    let indexOfItem = inventory.indexOf(item);
                    inventory.splice(indexOfItem, 1);
                }
                break;
            case 'Repair':
                if (inventory.includes(item)) {
                    let indexOfItem = inventory.indexOf(item);
                    inventory.splice(indexOfItem, 1);
                    inventory.push(item);
                }
                break;
            case 'Upgrade':
                let splittedUpgradeCommand = item.split('-');
                if (inventory.includes(splittedUpgradeCommand[0])) {
                    let indexOfUpgradeItem = inventory.indexOf(splittedUpgradeCommand[0]);
                    inventory.splice(indexOfUpgradeItem + 1, 0, (`${splittedUpgradeCommand[0]}:${splittedUpgradeCommand[1]}`));
                }
                break;
        }
        index++;
    }

    console.log(inventory.join(' '));
}
GladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);