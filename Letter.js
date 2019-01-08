const Letter = function (letter) {
    this.character = letter,
        this.guessedStatus = false,
        this.LetterDisplay = function () {
            if (this.character === ' ') {
                return ' ';
            } else if (this.guessedStatus) {
                return this.character;
            } else if (this.guessedStatus === false) {
                return "_ ";
            };
        },
        this.letterCheck = function (guess) {
            if (guess === this.character) {
                this.guessedStatus = true;
            };
        }
};

module.exports = Letter;