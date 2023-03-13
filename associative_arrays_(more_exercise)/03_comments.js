function comments(inputData) {

    let articles = {};
    let listOfUsers = {};
    let coppyOfInputData = inputData.slice(0);

    function colectDataAboutUsersAndArticles(input) {

        let inputLength = input.length;
        for (let i = 0; i < inputLength; i++) {
            let currentLine = input[i];
            let splittedLine = currentLine.split(' ');

            switch (splittedLine[0]) {
                case 'user':
                    listOfUsers[splittedLine[1]] = [];
                    coppyOfInputData.splice(i, 1, 'DELETED');
                    break;

                case 'article':
                    articles[splittedLine[1]] = {};
                    coppyOfInputData.splice(i, 1, 'DELETED');
                    break;
            }
        }

        return coppyOfInputData;
    }

    let collectedDataAboutUsersAndArticles = colectDataAboutUsersAndArticles(inputData);

    function getCommentFromUsers(collectedData) {

        let reducedInputData = (collectedData).filter(x => x !== 'DELETED');
        let reducedInputDataLength = reducedInputData.length;

        for (let i = 0; i < reducedInputDataLength; i++) {
            let currentLine = reducedInputData[i];
            let splitted = currentLine.split(': ');
            let userNameAndArticle = splitted[0].split(' posts on ');
            let titleAndCommend = splitted[1].split(', ');
            let title = titleAndCommend[0];
            let comment = titleAndCommend[1];
            if (listOfUsers.hasOwnProperty(userNameAndArticle[0])) {
                if (articles.hasOwnProperty(userNameAndArticle[1])) {
                    let currentArticle = articles[userNameAndArticle[1]];
                    if (currentArticle.hasOwnProperty(userNameAndArticle[0])) {
                        currentArticle[userNameAndArticle[0]][title] = comment;
                    } else {
                        currentArticle[userNameAndArticle[0]] = {};
                        currentArticle[userNameAndArticle[0]][title] = comment;

                    }
                }
            }
        }

        return articles;
    }

    let articlesWithUsersData = getCommentFromUsers(collectedDataAboutUsersAndArticles);

    function countOfComments(input) {
        let commentsCount = {}
        for (let article in input) {
            let currentArticle = articles[article];
            let commendCount = 0;
            for (let el in currentArticle) {
                for (let el2 in currentArticle[el]) {
                    commendCount++;
                }
            }

            commentsCount[article] = commendCount;
        }

        return commentsCount;
    }

    let countedComments = countOfComments(articlesWithUsersData);

    let commentsCountEntries = Object.entries(countedComments);
    let sortedCommentsCount = commentsCountEntries.sort((a, b) => b[1] - a[1]);

    for (let article of sortedCommentsCount) {
        console.log(`Comments on ${article[0]}`);
        let currentArticle = article[0];
        let currentArticleUsers = articles[currentArticle];
        let currentArticleUsersKeys = Object
            .keys(currentArticleUsers)
            .sort((a, b) => a.localeCompare(b));
        for (let user of currentArticleUsersKeys) {
            let currentUsername = currentArticleUsers[user];
            for (let title in currentUsername) {
                console.log(`--- From user ${user}: ${title} - ${currentUsername[title]}`);
            }
        }
    }
}

comments([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much',
]);