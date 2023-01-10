'use strict';

const totalScore01 = document.querySelector('.totalScore01');

const newDiceRoll = document.querySelector('.rollDice');

newDiceRoll.addEventListener('click', function () {
    let dice = Math.trunc(Math.random() * 6 + 1);
    let currentScore01 = document.querySelector('.currentScore01').textContent = 0 + dice;
    
    
})