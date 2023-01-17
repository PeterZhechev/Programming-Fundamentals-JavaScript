function rounding(number, precision) {

    if(precision > 15) {
        precision = 15;
    }

    let roundNumber = (number.toFixed(precision))

    console.log(parseFloat(roundNumber));
    
}

rounding(10.5,3);