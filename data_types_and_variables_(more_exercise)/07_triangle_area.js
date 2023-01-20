function triangleArea(side1, side2, side3) {

    let s = (side1 + side2 + side3) / 2;

    let a = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
    console.log(a);
}

triangleArea(3, 5.5, 4);