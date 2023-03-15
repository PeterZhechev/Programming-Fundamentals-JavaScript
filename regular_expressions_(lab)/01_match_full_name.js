function matchFullName(inputText) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;
    let result = inputText.match(pattern);
    
    return result.join(' ');
}

console.log(matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"));