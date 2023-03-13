function legendaryFarming(input) {

    let keyMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0,
    };

    let junkItems = {};

    let quantityAndMaterials = input.split(' ');
    let quantityAndMaterialsLength = quantityAndMaterials.length;
    let quantity = 0;
    let material = '';

    for (let i = 0; i < quantityAndMaterialsLength; i++) {
        if (i % 2 === 0) {
            quantity = Number(quantityAndMaterials[i]);
            continue;
        } else {
            material = (quantityAndMaterials[i]).toLowerCase();
        }

        if (material === 'shards' || material === 'fragments' || material === 'motes') {
            keyMaterials[material] += quantity;

            if (keyMaterials[material] >= 250) {
                break;
            }
        } else {
            if (!junkItems.hasOwnProperty(material)) {
                junkItems[material] = quantity;
            } else {
                junkItems[material] += quantity;
            }
        }
    }

    for (let key in keyMaterials) {
        if (keyMaterials[key] >= 250) {
            if (key === 'shards') {
                console.log('Shadowmourne obtained!');
                keyMaterials[key] -= 250;
            } else if (key === 'fragments') {
                console.log('Valanyr obtained!');
                keyMaterials[key] -= 250;
            } else if (key === 'motes') {
                console.log('Dragonwrath obtained!');
                keyMaterials[key] -= 250;
            }
        }
    }

    let sortedKeyMaterials = Object
        .entries(keyMaterials)
        .sort((a, b) => {
            let sorted = b[1] - a[1];

            if (sorted === 0) {
                sorted = a[0].localeCompare(b[0]);
            }

            return sorted;
        });

    for (let [material, quantity] of sortedKeyMaterials) {
        console.log(`${material}: ${quantity}`);
    }

    let sortedJunkItems = Object
        .entries(junkItems)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (let [item, quantity] of sortedJunkItems) {
        console.log(`${item}: ${quantity}`);
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');

// legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');