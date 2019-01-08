const inquirer = require('inquirer')
const Word = require('./Word.js');

const words = ["lemongrab", "huntress", "marceline", "lsp", "bmo", "bubblegum", "prismo", "jake the dog", "simon", "ice  king", "finn  the  human","peppermint  buttler"];
let guessesLeft = 12;
let random;
let secretWord;
let chickenNugget;

const gameReset = () => {
    console.log('------------------------New Word----------------------------\n')
    guessesLeft = 12;
    random = words[Math.floor(Math.random() * words.length)];
    secretWord = new Word(random);
    secretWord.newWord(random);
    chickenNugget = secretWord.wordDisplay();
    // console.log(secretWord.wordDisplay());
    // console.log('\n------------------------------------------------------------')
    playGame()
}

const checkGame = () => {
    let meatBall = secretWord.wordDisplay()
    if (meatBall === chickenNugget) {
        console.log("INCORRECT :( ")
    } else if (meatBall !== chickenNugget) {
        console.log('CORRECT!!!')
    };
    chickenNugget = meatBall;

    if (meatBall === random) {
        console.log('You Got it!!!')
        gameReset();
    } else if (meatBall !== random) {
        playGame();
    }
}


const playGame = () => {
    console.log(secretWord.wordDisplay() + '\n');
    // console.log('\n------------------------------------------------------------')

    inquirer.prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "? Guess a letter! ",
      name: "userguess"
    },
  ])
  .then(function(res) {
    // check results
    let userguess = res.userguess;
    secretWord.guessCheck(userguess)

    checkGame();
  });
};

gameReset();







// var winnerText = document.getElementById("winner-text")
// var winsText = document.getElementById("wins-text");
// var wordText = document.getElementById("current-word-text");
// var guessesLeftText = document.getElementById("guesses-left-text");
// var guessText = document.getElementById("guess-text");
// var imageHolder = document.getElementById("the-image");
// var cardText = document.getElementById("answer-text");



// var game = {
// wins: 0,
// guessesLeft: 12,
// yourGuesses: [""], //letters you already chose
// words: ["lemongrab", "huntress", "marceline", "lsp", "bmo", "bubblegum", "prismo", "jake the dog", "simon", "ice  king", "finn  the  human","peppermint  buttler"],
// secretWord: "", // this stores the computers randomly chosen word.
// answerArray: [], // stores the computers randomly picked word turned into an array.

// // method resets game =====================================================================
// gameReset: function () { 
//     console.log("reset game function");
//     this.secretWord = [""];
//     this.answerArray = [""];
//     this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];

//     console.log(this.secretWord);

//     // we turn the word picked by the computer into an array.
//     for (var i = 0; i < this.secretWord.length; i++){
//     this.answerArray[i] = "_";
//     };

//     for (j = 0; j < this.secretWord.length; j++) {
//         if (this.secretWord[j] === " ") {
//             this.answerArray[j] = " ";
//         }
//     }

//     // reset docement
//     wordText.textContent = this.answerArray.join("");
//     this.guessesLeft = 12;
//     this.yourGuesses = [""];
//     guessesLeftText.textContent = game.guessesLeft;
//     guessText.textContent = game.yourGuesses;
//     // winnerText.textContent = "Good Luck!"
// },

// // method rewrites stats ===================================================================
// reWriteStats: function() {
//     wordText.textContent = game.answerArray.join("")
//     guessText.textContent = game.yourGuesses;
//     guessesLeftText.textContent = game.guessesLeft;
//     winsText.textContent = this.wins;

//     console.log("rewrite stats")
// },

// // method happens when you hit a key ========================================================
// letterSelect: function(event) {
//     var userPick = event.key;
//     userPick = userPick.toLowerCase();

//     // this comparesyour input with the word you are guessing and updates.
//     for (j = 0; j < this.secretWord.length; j++) {
//         if (this.secretWord[j] === userPick) {
//             this.answerArray[j] = userPick;
//         }
//     }

//     if (this.answerArray.includes(userPick) === false && this.yourGuesses.includes(userPick) === false) {
//         this.guessesLeft--;
//     }

//     if (this.yourGuesses.includes(userPick) === false) {
//         this.yourGuesses = this.yourGuesses + userPick;
//     }

//     this.reWriteStats();
// },

// endGame: function() {
//     if (game.answerArray.join("") === game.secretWord) {
//         winnerText.textContent = "!!! " + "YOU WIN" + " !!!";
//         imageHolder.src = "assets/images/BMO.png";
//         cardText.textContent = "Hi  " + this.secretWord + "!";
//         this.wins++;
//         this.reWriteStats();
//         this.gameReset();
//     };

//     if (game.guessesLeft === 0) {
//         winnerText.textContent = "!!! " + "YOU LOSE" + " !!!";
//         imageHolder.src = "assets/images/Prismo.png";
//         cardText.textContent = "Try Again";
//         this.gameReset();
//     };
// }
// };

// // initialize game    
// game.gameReset();

// document.onkeyup = function(event) {
// game.letterSelect(event);
// game.endGame();
// }
