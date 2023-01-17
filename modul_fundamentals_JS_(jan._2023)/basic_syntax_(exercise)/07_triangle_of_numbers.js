function triangle(number) {

    let triangle = "";

    for (let i = 1; i <= number; i++) {

        triangle = "";

        for (let j = 1; j <= i; j++) {
            triangle += i + " ";
        }
        console.log(triangle);
    }

}

triangle(6);