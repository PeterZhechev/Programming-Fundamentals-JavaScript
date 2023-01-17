function distance(x1, y1, x2, y2) {
    
    let deltaX = x2 - x1;
    let deltaY = y2 - y1;

    let deltaXSq = (deltaX**2);
    let deltaYSq = (deltaY**2);
    let total = deltaXSq + deltaYSq;

    let distance = Math.sqrt(total);

    console.log(distance);

}

distance(2.34, 15.66, -13.55, -2.9985);