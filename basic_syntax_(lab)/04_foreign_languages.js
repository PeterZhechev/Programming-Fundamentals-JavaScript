function languages(country) {

    let countryNames = country;

    switch (countryNames) {
        case "England":
        case "USA":
            console.log("English");
            break;

        case "Spain":
        case "Argentina":
        case "Mexico":
            console.log("Spanish");
            break;

        default:
            console.log("unknown");
            break;
    }

}

languages("England");