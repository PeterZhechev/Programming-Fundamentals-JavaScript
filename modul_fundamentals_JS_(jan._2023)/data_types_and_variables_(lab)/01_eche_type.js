function type(input) {

    console.log(typeof input);

    if (typeof input === "string" || typeof input === "number") {
        console.log(input);
    } else {
        console.log('Parameter is not suitable for printing');
    }

}

type(5);