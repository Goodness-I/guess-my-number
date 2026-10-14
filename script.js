'use strict';

/*
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 10;
console.log(document.querySelector('.guess').value);
*/

//Handling click events
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayGuess = function (guess) {
  // document.querySelector('.guess').value = '';
  document.querySelector('.guess').value = guess;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number');

    //When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');

    // document.querySelector('.number').textContent = secretNumber;
    displayNumber(secretNumber);
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈Too High!' : 'Too Low';
      displayMessage(guess > secretNumber ? '📈Too High!' : 'Too Low');
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');

      // document.querySelector('.score').textContent = 0;
      displayScore('0');
    }
  }
});

// correction for the again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  // document.querySelector('.score').textContent = score;
  displayScore(score);
  // document.querySelector('.number').textContent = '?';
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
  if (refresh.key === 'ctrl + r') {
    document.querySelector('.again').click();
  }
});

document.addEventListener('keydown', function (backspace) {
  if (backspace.key === 'backspace') {
    document.querySelector('.again').click();
  }
});

//     //When guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈Too High!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }

//     //When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

//Manipulating css syles

//Implement the functionality of the game logic.

/*
Impllement a game rest functionality, so that the player can make a new guess! HEre is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and number variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (25rem)

GOODLUCK 😊
*/

// document.querySelector('.again').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   document.querySelector('.number').style.width = '35rem';

//   //When there is no input
//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔ No Number!';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '🎉 Correct Number';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('body').style.backgroundColor = '#222';
//   }

//   //When guess is high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       score--;
//       document.querySelector('.message').textContent = '📈 Too High!';
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textcontent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = '0';
//     }
//   }

//   //When it is low
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       score--;
//       document.querySelector('.message').textContent = 'Too Low';
//       document.querySelector('.score').textContent = 'score';
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = '0';
//     }
//   }
// });
