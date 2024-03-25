const dice1 = document.querySelectorAll(`.dice`)[0].querySelector(`img`);
const dice2 = document.querySelectorAll(`.dice`)[1].querySelector(`img`);
const rollDiceButton = document.querySelector(`.modern-button`)
const winnerMessage = document.querySelector(`h2`);


function randomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function changeElement(dice, number) {
    dice.src = `/dice${number}.png`;
}

function changeWinnerMessage(dice1Number, dice2Number) {

    if (dice1Number === dice2Number) {
        winnerMessage.textContent = `It's a Draw!`;
    } else if (dice1Number > dice2Number) {
        winnerMessage.textContent = `Player One Wins!`
    } else {
        winnerMessage.textContent = `Player Two Wins!`;
    }
}

rollDiceButton.addEventListener(`click`, function () {
    const dice1Number = randomDiceNumber();
    const dice2Number = randomDiceNumber();
    changeElement(dice1, dice1Number);
    changeElement(dice2, dice2Number);
    changeWinnerMessage(dice1Number, dice2Number);
});

