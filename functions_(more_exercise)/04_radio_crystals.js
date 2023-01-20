function radioCrystals(arr) {

    let targetThickness = arr[0];
    let arrLength = arr.length;
    let cutCount = 0;
    let lapCount = 0;
    let grindCount = 0;
    let etchCount = 0;

    for (let i = 1; i < arrLength; i++) {
        let currentChunk = arr[i];
        console.log(`Processing chunk ${currentChunk} microns`);
        if (currentChunk === targetThickness) {
            console.log(`Finished crystal ${currentChunk} microns`);
            continue;
        }

        if (currentChunk / 4 >= targetThickness) {
        while (currentChunk > targetThickness) {  // Cut loop
            currentChunk = currentChunk / 4;
            cutCount++;
            let cutAfter = currentChunk / 4;
            if (cutAfter < targetThickness) {
                console.log(`Cut x${cutCount}\nTransporting and washing`);
                currentChunk = Math.floor(currentChunk);
                cutCount = 0;
                break;
            }
        }
    }

        if (currentChunk === targetThickness) {
            console.log(`Finished crystal ${currentChunk} microns`);
            continue;
        }

        if (currentChunk * 0.80 >= targetThickness) {
        while (currentChunk > targetThickness) {  // Lap loop
            currentChunk = currentChunk * 0.80;
            lapCount++;
            let lapAfter = currentChunk * 0.80;
            if (lapAfter < targetThickness) {
                console.log(`Lap x${lapCount}\nTransporting and washing`);
                currentChunk = Math.floor(currentChunk);
                lapCount = 0;
                break;
            }
        }
    }

        if (currentChunk === targetThickness) {
            console.log(`Finished crystal ${currentChunk} microns`);
            continue;
        }

        if (currentChunk - 20 >= targetThickness) {
        while (currentChunk > targetThickness) {  // Grind loop 
            currentChunk -= 20;
            grindCount++;
            let grindAfter = currentChunk - 20;
            if (grindAfter < targetThickness) {
                console.log(`Grind x${grindCount}\nTransporting and washing`);
                currentChunk = Math.floor(currentChunk);
                grindCount = 0;
                break;
            }
        }
    }

        if (currentChunk === targetThickness) {
            console.log(`Finished crystal ${currentChunk} microns`);
            continue;
        }

        if (currentChunk - 1 >= targetThickness) {
        while (currentChunk > targetThickness) {  // Etch loop
            currentChunk -= 2;
            etchCount++;
            if (currentChunk + 1 === targetThickness || currentChunk === targetThickness) {
                console.log(`Etch x${etchCount}\nTransporting and washing`);
                currentChunk = Math.floor(currentChunk);
                etchCount = 0;
                break;
            }
        }
    }

        if (currentChunk === targetThickness) {
            console.log(`Finished crystal ${currentChunk} microns`);
            continue;
        }

        if (currentChunk + 1 === targetThickness) {
            currentChunk++;
            console.log(`X-ray x1\nFinished crystal ${currentChunk} microns`);
            continue;
        }
    }
}

radioCrystals([222, 545]);