function movies(inputList) {

    let movesList = [];

    // add the movies from the input list
    for (line of inputList) {
        let [addCommand] = line.split(' ');
        if (addCommand === 'addMovie') {

            // cut the add command
            let cuttedAddCommand = line.split(' ');
            cuttedAddCommand.shift();
            movesList.push(cuttedAddCommand.join(' '));
        }
    }

    let listWithData = [];

    // remove added movies
    for (line of inputList) {
        let [addCommand] = line.split(' ');
        if (addCommand !== 'addMovie') {
            listWithData.push(line);
        }
    }

    let listWithAddedMoviesData = [];
    let currentMovie = [];

    // remove movies that are not in 'addMovie' list
    for (line of listWithData) {
        let joined = '';
        currentMovie = [];
        let splitted = line.split(' ');
        for (currentWord of splitted) {
            if (currentWord !== 'directedBy' && currentWord !== 'onDate') {
                currentMovie.push(currentWord);
            } else {
                joined = currentMovie.join(' ');
                for (let i = 0; i < movesList.length; i++) {
                    let currentExistMovie = movesList[i];
                    if (currentExistMovie === joined) {
                        listWithAddedMoviesData.push(line);
                    }
                }
                break;
            }
        }
    }

    // make an object with movies
    let moviesObj = {};


    for (movie of movesList) {

        // add current movie name
        moviesObj.name = movie;

        for (dir of listWithAddedMoviesData) {
            let splittedDir = dir.split(' ');
            let splittedDirLength = splittedDir.length;
            let currentMovie = [];
            for (word of splittedDir) {
                if (word !== 'directedBy' && word !== 'onDate') {
                    currentMovie.push(word);
                } else {
                    currentMovie = currentMovie.join(' ');
                    break;
                }
            }

            if (currentMovie === movie) {
                for (let i = 0; i < splittedDirLength; i++) {
                    let currentWord = splittedDir.shift();
                    if (currentWord === 'directedBy') {
                        let joinned = splittedDir.join(' ');
                        moviesObj.director = joinned;
                        break;
                    } else if (currentWord === 'onDate') {
                        let joinned = splittedDir.join(' ');
                        moviesObj.date = joinned;
                        break;
                    }
                }
            }
        }

        // chech if there exist name, director and date

        let count = 0;
        for (el in moviesObj) {
            count++;
        }

        if (count === 3) {
            console.log(JSON.stringify(moviesObj));
        }
        moviesObj = {};
    }
}

// movies([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ]);

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
);

