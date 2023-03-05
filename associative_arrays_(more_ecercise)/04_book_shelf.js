function bookShelf(inputData) {

    let shelvesId = {};
    let shelvesGenres = {};
    let countByBooksQuantity = {};

    for (el of inputData) {
        let [id, genre] = el.split(' -> ');
        id = Number(id);
        if (genre) {
            if (!shelvesId.hasOwnProperty(id)) {
                shelvesId[id] = genre;
                shelvesGenres[genre] = {};
                countByBooksQuantity[genre] = 0;
            }
        } else {
            let [bookTitle, bookInfo] = el.split(': ');
            let [bookAuthor, bookGenre] = bookInfo.split(', ');

            if (shelvesGenres.hasOwnProperty(bookGenre)) {
                shelvesGenres[bookGenre][bookTitle] = bookAuthor;
                countByBooksQuantity[bookGenre]++;
            }
        }
    }

    function sortBooksByQuantity(unsortedData) {

        let SortedcountByBooksQuantity = Object
            .entries(unsortedData)
            .sort(((a, b) => b[1] - a[1]));

        return SortedcountByBooksQuantity;
    }

    let sortedData = sortBooksByQuantity(countByBooksQuantity);

    let reversedObj = {};

    function reverseKeysAndValues(inputObj) {
        for (let key in inputObj) {
            reversedObj[inputObj[key]] = Number(key);
        }

        return reversedObj;
    }

    let returnedReversedObj = reverseKeysAndValues(shelvesId);

    function sortBooksByAscending(input) {

        let sortedBooks = {};
        for (let key in input) {
            let currentObj = input[key]
            let currentSortedShelf = Object
                .entries(currentObj)
                .sort((a, b) => a[0].localeCompare(b[0]));
            sortedBooks[key] = [];
            sortedBooks[key].push(currentSortedShelf);
        }

        return sortedBooks;
    }

    let sortedBooksByAscending = sortBooksByAscending(shelvesGenres);

    for (let el of sortedData) {
        let currentId = returnedReversedObj[el[0]];
        console.log(`${currentId} ${el[0]}: ${countByBooksQuantity[el[0]]}`);
        let currentGenre = sortedBooksByAscending[el[0]];
        for (let shelf of currentGenre) {
            for (let [bookTitle, bookAutor] of shelf) {
                console.log(`--> ${bookTitle}: ${bookAutor}`);
            }
        }
    }
}


bookShelf([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
]);