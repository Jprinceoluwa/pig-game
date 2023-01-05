'use strict';

const player01El = document.querySelector('.player--0');
const player02El = document.querySelector('.player--1');
const rank01El = document.querySelector('.player-rank--01');
const rank01E2 = document.querySelector('.player-rank--02');
const current01El = document.getElementById('current--0');
const current02El = document.getElementById('current--1');
const score01EL = document.getElementById('score--0');
const score02EL = document.getElementById('score--1');
const diceRoll = document.querySelector('.btn--roll');
const holdButt = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
let diceImage = document.querySelector('.dice');

//Starting conditions

let current, activePlayer, playing, scores;
let rank = [1, 1];

const init = function () {
     
     scores = [0, 0];
     diceImage.classList.add('hidden');
     current01El.textContent = 0;
     current02El.textContent = 0;
     score01EL.textContent = 0;
     score02EL.textContent = 0;
     player01El.classList.add('player--active');
     player02El.classList.remove('player--active');
     player01El.classList.remove('player--winner');
     player02El.classList.remove('player--winner');
     current = 0;
     activePlayer = 0;
     playing = true;
}

init();

const switchPlayer = function(){
     document.getElementById(`current--${activePlayer}`).textContent = 0;
          current = 0;
          activePlayer = activePlayer === 0 ? 1 : 0;
          player01El.classList.toggle('player--active');
          player02El.classList.toggle('player--active');
}

diceRoll.addEventListener('click', function () {
     if (playing) {
            
     let dice = Math.trunc(Math.random() * 6 + 1);
     diceImage.src = `dice-${dice}.png`;
     diceImage.classList.remove('hidden');
     if (dice !== 1) {
          current += dice;
          document.getElementById(`current--${activePlayer}`).textContent = current;
     } else {
          switchPlayer();
     }
}

})

holdButt.addEventListener('click', function () {
     if (playing) {
          
     scores[activePlayer] += current;
     document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

     if (scores[activePlayer] >= 100) {
          document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
          diceImage.classList.add('hidden');
          document.getElementById(`player-rank--${activePlayer}`).textContent = rank[activePlayer] ++; 
          playing = false;
     } else {
          switchPlayer();
     }
}
})

newGame.addEventListener('click', init)
