function pyramid(base, increment) {

    let stoneRequired = 0;
    let marbleRequired = 0;
    let lapisLazuliRequired = 0;
    let goldRequired = 0;
    let finalPyramidHeight = 0;

    let stepCounter = 0;


    if (increment > 0 && base > 0) {

        for (let i = base; i > 0; i -= 2) {

            if (stepCounter > 0) {
                stoneRequired += (i * i);

                if (stepCounter % 5 !== 0) {
                    marbleRequired += ((i + 2) * (i + 2)) - (i * i);
                } else if (stepCounter % 5 === 0) {
                    lapisLazuliRequired += ((i + 2) * (i + 2)) - (i * i);
                }

            }

            if (i === 2 || i === 1) {
                goldRequired = i * i;
            }

            stepCounter++;
        }

    }

    finalPyramidHeight = Math.floor(stepCounter * increment);

    stoneRequired = stoneRequired * increment;
    console.log(`Stone required: ${Math.ceil(stoneRequired)}`);

    marbleRequired = marbleRequired * increment;
    console.log(`Marble required: ${Math.ceil(marbleRequired)}`);

    lapisLazuliRequired = lapisLazuliRequired * increment;
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliRequired)}`);

    goldRequired = goldRequired * increment;
    console.log(`Gold required: ${Math.ceil(goldRequired)}`);
    console.log(`Final pyramid height: ${finalPyramidHeight}`);

}

pyramid(11, 1);