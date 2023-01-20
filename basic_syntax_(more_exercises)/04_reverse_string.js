function reverse(input) {

    let splitString = input.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");

    console.log(joinArray);
    
}

reverse("Hello");