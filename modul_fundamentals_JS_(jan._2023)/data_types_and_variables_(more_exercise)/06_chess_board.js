function chessBoard(inputNum) {

    let divOpening = (`  <div>`)
    let output1 = (`    <span class="black"></span>`);
    let output2 = (`    <span class="white"></span>`);
    let divClosing = (`  </div>`)

    console.log('<div class="chessboard">');

    for (let i = 1; i <= inputNum; i++) {

        if (i % 2 !== 0) {
            console.log(divOpening);
            for (let j = 1; j <= inputNum; j++) {
                if (j % 2 !== 0) {
                    console.log(output1);
                } else if (j % 2 === 0) {
                    console.log(output2);
                }
            }
            console.log(divClosing);
        } else if (i % 2 === 0) {
            console.log(divOpening);
            for (let k = 1; k <= inputNum; k++) {
                if (k % 2 !== 0) {
                    console.log(output2);
                } else if (k % 2 === 0) {
                    console.log(output1);
                }
            }
            console.log(divClosing);
        }

    }
    console.log(`</div>`);
}

chessBoard(6);