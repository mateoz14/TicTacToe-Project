


const ticTacToe = (() => {
    const createPlayers = (name, marker, score) => {
        return{name, marker, score}; // factory function to create players and their data.
    };
    const startButton = document.querySelector("#start-button");
    
    let currentMarker = "X";
    
    const createGameBox = (() => {
        let gameBoard = [];
        for (let i = 0; i <= 8; i++) {
            let newBox = document.querySelector(`#box${i}`)
            gameBoard[i] = newBox;
            gameBoard[i].addEventListener('click', (() => {
                if (gameBoard[i].textContent == "") {
                    gameBoard[i].textContent = currentMarker;
                    if (currentMarker == "X") {
                        currentMarker ="O";
                    } else {
                        currentMarker = "X";
                    }
                } else {
                    // do zero zip nada.
                }
            }))
        } return gameBoard;
    })();
    
    if ((gameBoard[0].textContent === gameBoard[]))

})();






// const player1 = createPlayers({
//     name: 'Mateo',
//     marker: 'X',
//     score: '0',
// })


// let diceRoll = () => {
//     roll1 = Math.floor(Math.random()*6)+1;
//     roll2 = Math.floor(Math.random()*6)+1;
//     return{roll1, roll2};
// };

// const startGame = ((player1, player2) => {
//     const startButton = document.querySelector('#start-button')
//     let diceRollText = document.querySelector("#dice-roll");
//     let dotCount = 0;
//     let intervalId;
//     let roll = 1;
//     let rolls = diceRoll()
//     let markerSelection = document.querySelector(".marker-selection")
//     let chooseYourMarkerText = document.querySelector("#choose-your-marker-texts");
//     const chooseYourMarker = (player1, player) => {
        
//     }
//     const whosChoosing = () => {
//         if (roll === 1) {
//             diceRollText.textContent = `Player 1 rolled a ${rolls.roll1}`
//             roll++
//             setTimeout(animation,1000)
//         } else {
//             diceRollText.textContent = `Player 2 rolled a ${rolls.roll2}`;
//             setTimeout(() => {
//                 if (rolls.roll1 > rolls.roll2) {
//                     player1.firstPick = true;
//                     chooseYourMarkerText.textContent="Player 1 choose your marker";
//                 } else if (rolls.roll1 < rolls.roll2) {
//                     player2.firstpick = true;
//                     chooseYourMarkerText.textContent="Player 2 choose your marker";
//                 }
//             }, 2000)
//         }
//     };
//     const animation = () => {
//         diceRollText.textContent = "Rolling dice ";
//         if (dotCount < 3) {
//             intervalId = setInterval(() => {
//                 diceRollText.textContent += "."
//                 dotCount++
//                 if (dotCount > 3) {
//                     clearInterval(intervalId)
//                     dotCount = 0;
//                     whosChoosing()
//                 }
//             }, 280);
//         } else {
//             clearInterval(intervalId)
//         }
//     };
//     let rollTheDice = () => {
//         animation()
//     }
//     startButton.addEventListener('click', () => {
//         diceRollText.style.display = "block";
//         startButton.style.display = "none";
//         animation();
//     })
// })()