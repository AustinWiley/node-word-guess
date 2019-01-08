const Letter = require('./Letter.js');

const Word = function (word) {
    this.currentWord = word;
    this.letters = [],
    this.wordDisplay = function () {
        let displayWord = [];
        for (let j = 0; j < this.letters.length; j++) {
            displayWord.push(this.letters[j].LetterDisplay())
        }
        // console.log(displayWord.join(''));
        return displayWord.join('');
    },
    this.guessCheck = function (guess) {
        for (let k = 0; k < this.letters.length; k++) {
            this.letters[k].letterCheck(guess)
        };
    }
    this.newWord = function (word) {
        for (let i = 0; i < word.length; i++) {
            this.letters.push(new Letter(word[i]))
        }
        // console.log(this.letters[0].LetterDisplay())
    }
};

// const word1 = new Word('elephant');
// word1.newWord('monkey butt')
// word1.wordDisplay();
// word1.guessCheck('o')
// word1.wordDisplay();

// word1.guessCheck('l')
// word1.wordDisplay();

// word1.guessCheck('e')
// word1.wordDisplay();

// console.log(word1.wordDisplay() + "hell yeah")



module.exports = Word;