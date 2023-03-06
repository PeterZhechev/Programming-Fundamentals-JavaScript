function legendaryFarming(input) {

    let keyMaterials = {};
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
            material = quantityAndMaterials[i];
        }

        if (material === 'Shards' || material === 'Fragments' || material === 'Motes') {
            if (!keyMaterials.hasOwnProperty(material)) {
                keyMaterials[material] = quantity;
            } else {
                keyMaterials[material] += quantity;
            }
        } else {
            if (!junkItems.hasOwnProperty(material)) {
                junkItems[material] = quantity;
            } else {
                junkItems[material] += quantity;
            }
        }
    }

    
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');