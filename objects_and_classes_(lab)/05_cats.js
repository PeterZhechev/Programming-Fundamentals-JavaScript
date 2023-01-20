function cats(cats) {

    class Cat {
        constructor(catName, catAge) {
            this.name = catName;
            this.age = catAge;
        }
    }

    for (let i = 0; i < cats.length; i++) {
        let currentCatAndAge = cats[i].split(' ');
        let catName = currentCatAndAge[0];
        let catAge = Number(currentCatAndAge[1]);

        let newCats = new Cat(catName, catAge);

        console.log(`${newCats.name}, age ${newCats.age} says Meow`);
    }
}

cats(['Mellow 2', 'Tom 5']);
