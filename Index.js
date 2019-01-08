const inquirer = require('inquirer')
const Word = require('./Word.js');

const words = ["lemongrab", "huntress", "marceline", "lsp", "bmo", "bubblegum", "prismo", "jake the dog", "simon", "ice  king", "finn  the  human","peppermint  buttler"];
let guessesLeft = 12;
let random;
let secretWord;
let progressDisplay;



const checkGame = () => {
    let displayWord = secretWord.wordDisplay();
    //check if a change was made to display word to see if you guessed right.
    if (displayWord === progressDisplay) {
        console.log("\x1b[31m"+"\nINCORRECT :( \n"+"\x1b[0m")
        guessesLeft--;
        console.log(guessesLeft + ' Tries left.')
    } else if (displayWord !== progressDisplay) {

        console.log("\x1b[32m"+'\nCORRECT!!!' + "\x1b[0m")
    };
    progressDisplay = displayWord;
    //check any tries left, if so check if word is complete.
    if (guessesLeft === 0) {
        console.log('You Failed, NEW WORD');
        gameReset();
    } else if (displayWord === random) {
        console.log(displayWord.capitalize());
        console.log('You Got it right! NEXT WORD')
        gameReset();
    } else if (displayWord !== random) {
        playGame();
    };
}

const playGame = () => {
    console.log('\n' + secretWord.wordDisplay().capitalize() + '\n');
    inquirer.prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "Guess a letter! ",
      name: "userguess"
    },
  ])
  .then(function(res) {
    // check results
    let userguess = res.userguess.toLowerCase();
    secretWord.guessCheck(userguess)
    checkGame();
  });
};

const gameReset = () => {
    // console.log('------------------------New Word----------------------------')
    guessesLeft = 12;
    random = words[Math.floor(Math.random() * words.length)];
    secretWord = new Word(random);
    secretWord.newWord(random);
    progressDisplay = secretWord.wordDisplay();
    // console.log(secretWord.wordDisplay());
    // console.log('\n------------------------------------------------------------')
    playGame()
};

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
  };

console.log('----------------New Word--------------------\n')
gameReset();