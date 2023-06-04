

const startGame = ((player1, player2, roll1, roll2) => {
    const startButton = document.querySelector('#start-button')
    let diceRollText = document.querySelector("#dice-roll");
    let dotCount = 0;
    function rollDiceAnimation() {
       
        if (dotCount < 3) {
            dotCount += 1
            diceRollText.textContent += " . ";
        } else {
            dotCount = 0;
            diceRollText.textContent = "Rolling dice "
        }
    }
    startButton.addEventListener('click', () => {
        diceRollText.style.display = "block";
        startButton.style.display = "none";
        setInterval(rollDiceAnimation, 250);
    })
})();