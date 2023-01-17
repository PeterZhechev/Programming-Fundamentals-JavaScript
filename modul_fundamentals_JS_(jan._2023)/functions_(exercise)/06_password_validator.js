function passwordValidator(password) {

    function checkPasswordLength() {
        let passwordLength = password.length;
        let isValidPasswordLength = false;
        if (passwordLength >= 6 && passwordLength <= 10) {
            isValidPasswordLength = true;
        } else {
            isValidPasswordLength = false;
        }

        return isValidPasswordLength;
    }

    function passwordContent() {
        let isValidPasswordContent = false;
        let passwordLength = password.length;
        let currentSymbol = '';
        let validSymbolsCount = 0;
        for (let i = 0; i < passwordLength; i++) {
            isValidPasswordContent = false;
            currentSymbol = password[i];
            let asciiNum = currentSymbol.charCodeAt();
            if (asciiNum >= 48 && asciiNum <= 57) {
                isValidPasswordContent = true;
            }

            if (asciiNum >= 65 && asciiNum <= 90) {
                isValidPasswordContent = true;
            }

            if (asciiNum >= 97 && asciiNum <= 122) {
                isValidPasswordContent = true;
            }

            if (isValidPasswordContent) {
                validSymbolsCount++;
            }
        }

        if (validSymbolsCount === passwordLength) {
            isValidPasswordContent = true;
        } else {
            isValidPasswordContent = false;
        }

        return isValidPasswordContent;
    }

    function digitsCount() {
        let isValidDigitsCount = false;
        let currentSymbol = '';
        let passwordLength = password.length;
        let numsCount = 0;
        let asciiNum = 0;
        for (let i = 0; i < passwordLength; i++) {
            currentSymbol = password[i];
            asciiNum = Number(currentSymbol.charCodeAt());
            if (asciiNum >= 48 && asciiNum <= 57) {
                numsCount++;
            }
        }

        if (numsCount >= 2) {
            isValidDigitsCount = true;
        } else {
            isValidDigitsCount = false;
        }

        return isValidDigitsCount;
    }

    let passwordLengthValidator = checkPasswordLength();
    let passwordContentValidator = passwordContent();
    let passwordDigitValidator = digitsCount();

    if (passwordLengthValidator === false && passwordContentValidator === false && passwordDigitValidator === false) {
        return `Password must be between 6 and 10 characters\nPassword must consist only of letters and digits\nPassword must have at least 2 digits`;
    } else if (passwordLengthValidator === false && passwordContentValidator === true && passwordDigitValidator === true) {
        return `Password must be between 6 and 10 characters`;
    } else if (passwordLengthValidator === true && passwordContentValidator === false && passwordDigitValidator === true) {
        return `Password must consist only of letters and digits`;
    } else if (passwordLengthValidator === true && passwordContentValidator === true && passwordDigitValidator === false) {
        return `Password must have at least 2 digits`;
    } else if (passwordLengthValidator === false && passwordContentValidator === false && passwordDigitValidator === true) {
        return `Password must be between 6 and 10 characters\nPassword must consist only of letters and digits`;
    } else if (passwordLengthValidator === false && passwordContentValidator === true && passwordDigitValidator === false) {
        return `Password must be between 6 and 10 characters\nPassword must have at least 2 digits`;
    } else if (passwordLengthValidator === true && passwordContentValidator === false && passwordDigitValidator === false) {
        return `Password must consist only of letters and digits\nPassword must have at least 2 digits`;
    } else if (passwordLengthValidator === true && passwordContentValidator === true && passwordDigitValidator === true) {
        return `Password is valid`;
    }
}

let passValidator = passwordValidator('logIn');

console.log(passValidator);