const ticTacToe = (() => {
    const commentary = document.querySelector("#choose-your-marker-text");
    const startButton = document.querySelector("#start-button");
    const markerSelection = document.querySelector(".marker-selection");
    const xMarker = document.querySelector("#X-marker")
    const oMarker = document.querySelector("#O-marker")
    const restartButton = document.createElement("button")
    
    restartButton.setAttribute("id", "restart-button");
    restartButton.textContent = "Play again";
    
    const commentatorBox = document.querySelector(".start-the-game"); // where the form will be appended
    
    
    startButton.addEventListener('click', () => {
        // display the appropriate text for the beginning of the game.
        startButton.style.display = 'none';
        startOfGame();
    });
    
    const createPlayers = (name, marker, score) => {
        return {
            name,
            marker,
            score,
        }
    };
    
    const getPlayerInfo = () => {
        let form = document.createElement("form"); // create the form.
        form.style.display = 'flex'; // make the form show up.
        
        let player1Input = document.createElement("input"); // create the input boxes. 
        let player2Input = document.createElement("input");
        let label1 = document.createElement('label');
        let label2 = document.createElement('label');

        let submitNames = document.createElement("submit"); // submit button.
        
        form.setAttribute("class", "PlayerNameForm"); // set a class on the form duh.
        
        player1Input.setAttribute('id', 'player1'); // set the id of the player input boxes duh.
        player1Input.setAttribute('type', 'text');
        label1.setAttribute('for', 'player1Input');
        label1.textContent = "Player-1 Name: ";
        
        player2Input.setAttribute('id', 'player2'); 
        player2Input.setAttribute('type', 'text');
        label2.setAttribute('for', 'player2Input');
        label2.textContent = "Player-2 Name: ";

        submitNames.setAttribute('id', 'submit-button');
        submitNames.textContent = "Submit";
        
        form.appendChild(label1);
        form.appendChild(player1Input) // add the inputs to the form.
        form.appendChild(label2);
        form.appendChild(player2Input);
        form.appendChild(submitNames);
       
        commentatorBox.appendChild(form);
        
        return {
            player1Input,
            player2Input,
            submitNames,
            form,
        }
    }
    
    getPlayerInfo()
    
    
    restartButton.addEventListener('click', () => {
        xMarker.style.display = "flex";
        oMarker.style.display = "flex";
        restartButton.style.display = "none";
        startOfGame();
    })
    
    const startOfGame = () => {
        commentary.style.display = "flex";
        commentary.textContent = `${whosTurn.name} choose your marker`
        markerSelection.style.display = "flex";
        // eventlisteners on the marker buttons to declare what markers the players will be assigned.
        xMarker.addEventListener('click', () => {
            if (whosTurn == player1) {
                player1.marker = 'X';
                player2.marker = 'O'; 
                whosTurn = player1;
            } else {
                player2.marker = 'X';
                player1.marker = 'O';
                whosTurn = player2;
            }; 
            xMarker.style.display = 'none';
            oMarker.style.display = 'none';
            commentary.textContent = `${whosTurn.name} is X, go first !`
            gameRules();
        });  
        oMarker.addEventListener('click', () => {
            if (whosTurn == player1) {
                player1.marker = 'O';
                player2.marker = 'X';
                whosTurn = player2;
            } else {
                player1.marker = 'X';
                player2.marker = 'O';
                whosTurn = player1;
            }; 
            xMarker.style.display = 'none';
            oMarker.style.display = 'none';
            commentary.textContent = `${whosTurn.name} is X, go first!`
            gameRules();
        });  
    };
    
    const gameRules = () => {
        for (let i = 0; i <= 8; i++) { // a for loop to add the eventlistener for each box so that the marker is added when it is clicked.
        gameBoard.boxes[i] = document.querySelector(`#box${i}`)
        gameBoard.boxes[i].textContent = ""; // makes sure the board is clear when the game begins.
        gameBoard.boxes[i].addEventListener('click', () => {
            if (gameBoard.boxes[i].textContent == "") {
                gameBoard.boxes[i].textContent = whosTurn.marker
                commentary.textContent = `${whosTurn.name}'s turn`
                if (whosTurn == player1) {
                    whosTurn = player2 // set whosTurn to the opposite player.
                    commentary.textContent = `${player2.name}'s Turn` // show whosturn duh.
                } else {
                    whosTurn = player1
                    commentary.textContent = `${player1.name}'s Turn`
                }
            };
            // longg if statement setting the rules on who wins the game. **> what are some other ways to write this out? hmmm.
            if ((ticTacToe.gameBoard.boxes[0].textContent != "" && ticTacToe.gameBoard.boxes[0].textContent === ticTacToe.gameBoard.boxes[3].textContent && ticTacToe.gameBoard.boxes[3].textContent === ticTacToe.gameBoard.boxes[6].textContent)
                ||(ticTacToe.gameBoard.boxes[1].textContent != "" && ticTacToe.gameBoard.boxes[1].textContent === ticTacToe.gameBoard.boxes[4].textContent && ticTacToe.gameBoard.boxes[4].textContent === ticTacToe.gameBoard.boxes[7].textContent)
                ||(ticTacToe.gameBoard.boxes[2].textContent != "" && ticTacToe.gameBoard.boxes[2].textContent === ticTacToe.gameBoard.boxes[5].textContent && ticTacToe.gameBoard.boxes[5].textContent === ticTacToe.gameBoard.boxes[8].textContent)
                ||(ticTacToe.gameBoard.boxes[0].textContent != "" && ticTacToe.gameBoard.boxes[0].textContent === ticTacToe.gameBoard.boxes[1].textContent && ticTacToe.gameBoard.boxes[1].textContent === ticTacToe.gameBoard.boxes[2].textContent)
                ||(ticTacToe.gameBoard.boxes[3].textContent != "" && ticTacToe.gameBoard.boxes[3].textContent === ticTacToe.gameBoard.boxes[4].textContent && ticTacToe.gameBoard.boxes[4].textContent === ticTacToe.gameBoard.boxes[5].textContent)
                ||(ticTacToe.gameBoard.boxes[6].textContent != "" && ticTacToe.gameBoard.boxes[6].textContent === ticTacToe.gameBoard.boxes[7].textContent && ticTacToe.gameBoard.boxes[7].textContent === ticTacToe.gameBoard.boxes[8].textContent)
                ||(ticTacToe.gameBoard.boxes[0].textContent != "" && ticTacToe.gameBoard.boxes[0].textContent === ticTacToe.gameBoard.boxes[4].textContent && ticTacToe.gameBoard.boxes[4].textContent === ticTacToe.gameBoard.boxes[8].textContent)
                ||(ticTacToe.gameBoard.boxes[2].textContent != "" && ticTacToe.gameBoard.boxes[2].textContent === ticTacToe.gameBoard.boxes[4].textContent && ticTacToe.gameBoard.boxes[4].textContent === ticTacToe.gameBoard.boxes[6].textContent)
                ) {
                if (whosTurn = player1) {
                    commentary.textContent = `TicTacToe! ${player1.name} Wins!`;
                } else {
                    commentary.textContent = `TicTacToe! ${player2.name} Wins!`;
                }
                gameBoard.boxes = [] // reset the gameboard, and removes functionality.
                markerSelection.appendChild(restartButton) // puts the restart buttons where the marker selection would be. duh
                restartButton.style.display = "flex";

            } else if (gameBoard.boxes.every(box => box.textContent !== "")) {
                commentary.textContent = "It is a tie!";
                gameBoard.boxes = [] // reset the gameboard, and removes functionality.
                markerSelection.appendChild(restartButton)
                restartButton.style.display = "flex";
            }
            
        });
        
    };
    
    };
    
    // i need an object that holds data such as a key holding player1&2-score, and a key for whos turn it is. Lets call it ruleSet
    
    let whosTurn = player1;
    
  
    const gameBoard = {
        boxes:[],
    };
    
// variables inlcluded are boxes from the gameBoard, and we are accessing each players score.    
    return {
        player1,
        player2,
        whosTurn,
        gameBoard,
        commentary,
        startButton,
        commentatorBox,
        markerSelection,
        gameRules,
        restartButton,
        startOfGame,
        getPlayerInfo,
    }
})();


    
    
    
    
    
    
    
    
    
    
    
    

    

// let gameBoard = [];
        // for (let i = 0; i <= 8; i++) {
        //     let newBox = document.querySelector(`#box${i}`)
        //     gameBoard[i] = newBox;
        //     gameBoard[i].addEventListener('click', (() => {
        //         if (gameBoard[i].textContent == "") {
        //             gameBoard[i].textContent = currentMarker;
        //             if (currentMarker == "X") {
        //                 currentMarker ="O";
        //             } else {
        //                 currentMarker = "X";
        //             }
        //         } else {
        //             // do zero zip nada.
        //         }
        //     }))
        
        // }   if (gameBoard.slice(0,2).every(element => (element.textContent === gameBoard[0].textContent) && (element.textContent != ""))) {
        //     commentary.textContent = `${gameBoard[0].textContent} wins!`;
        // }




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