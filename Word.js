const Letter = require('./Letter.js');

const Word = function (word) {
    this.letters = [...word].map(lett => {
        return new Letter(lett)
    }),
    this.wordDisplay = function () {
        let displayWord = [];
        for (let j = 0; j < this.letters.length; j++) {
            displayWord.push(this.letters[j].letterDisplay())
        }
        return displayWord.join('');
    },
    this.guessCheck = function (guess) {
        for (let k = 0; k < this.letters.length; k++) {
            this.letters[k].letterCheck(guess)
        };
    }
};

module.exports = Word;