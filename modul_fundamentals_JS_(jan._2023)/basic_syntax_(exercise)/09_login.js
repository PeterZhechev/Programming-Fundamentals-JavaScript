function login(input) {

    let index = 0;
    let username = input[0];
    let incorrectCount = 0;

    let splitString = input[index].split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");

    index++;
    let command = input[index];

    while (index < input.length) {

        if (command !== joinArray) {
            incorrectCount++;
            if (incorrectCount > 3) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log(`Incorrect password. Try again.`);
        } else if (command === joinArray) {
            console.log(`User ${username} logged in.`);

        }

        index++;
        command = input[index];
    }

}

login(['Acer', 'login', 'go', 'let me in', 'recA']);