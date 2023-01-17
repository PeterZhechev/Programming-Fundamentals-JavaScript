function cone(radius, height) {

    let volume = 0;
    let area = 0;

    let s = Math.sqrt((radius ** 2) + (height ** 2));

    volume = (1 / 3) * Math.PI * (radius ** 2) * height;

    area = Math.PI * radius * (radius + s);


    console.log(`volume = ${(volume).toFixed(4)}`);
    console.log(`area = ${(area).toFixed(4)}`);

}

cone(3.3, 7.8);