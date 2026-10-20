'use strict';

//Handling click events
let secretNumber = Math.trunc(Math.random() * 25) + 1;
let score = 20;
let highscore = 0;
let isPlaying = true;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayGuess = function (guess) {
  document.querySelector('.guess').value = guess;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
document.querySelector('.check').addEventListener('click', function () {
  if (!isPlaying) return;

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('⛔ No Number');

    //When player wins
  } else if (guess === secretNumber) {
    isPlaying = false;
    displayMessage('🎉 Correct Number!');

    displayNumber(secretNumber);
    displayGuess('');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too High!' : 'Too Low');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore('0');
    }
  }
});

// correction for the again button
document.querySelector('.again').addEventListener('click', function () {
  isPlaying = true;

  score = 20;
  secretNumber = Math.trunc(Math.random() * 50) + 1;

  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  displayGuess('');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//To allow the user to press the enter key to submit their guess, you can add an event listener for the 'keydown' event and check if the pressed key is 'Enter'. If it is, you can trigger the click event of the check button. Here's how you can implement this:
document.addEventListener('keydown', function (enter) {
  if (enter.key === 'Enter') {
    document.querySelector('.check').click();
  }
});

document.addEventListener('keydown', function (refresh) {
  if (refresh.ctrlKey && refresh.key.toLowerCase() === 'r') {
    refresh.preventDefault();
    document.querySelector('.again').click();
  }
});
