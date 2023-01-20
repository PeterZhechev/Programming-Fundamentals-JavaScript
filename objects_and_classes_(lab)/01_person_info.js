function personInfo(firstName, lastName, age) {

    let personalInformation = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }

    return personalInformation;
}

let test = personInfo("Peter", "Pan", "20");

console.log(test);