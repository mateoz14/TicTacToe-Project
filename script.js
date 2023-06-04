const startGame = ((player1, player2, roll1, roll2) => {
    const startButton = document.querySelector('#start-button')
    function rollDiceAnimation() {
        startButton.element = ""
        startButton.innerText = "Rolling dice";
    }
    startButton.addEventListener('click', () => {
        diceRollText = document.querySelector("#dice-roll");
        diceRollText.style.display = "block";
        startButton.style.display = "none";
    })
})();