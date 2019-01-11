# node-constructor-word-guess

### Overview

Word Guess command-line game using constructor functions.  

![Word Guess Cli](Images/01-WordGuess-Cli.gif)

* **Letter.js**: Contains a constructor, Letter. This constructor can display an underlying character or a blank placeholder, depending on whether or not the user has guessed the letter. That constructor defines:

  * A string value to store the underlying character for the letter

  * A boolean value that stores whether that letter has been guessed yet

  * A function that returns the underlying character if the letter has been guessed, or a placeholder if the letter has not been guessed

  * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. The constructor defines:

  * An array of `new` Letter objects representing the letters of the underlying word

  * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

* **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses

### Instructions on how to node-constructor-word-guess

1. Copy the `node-constructor-word-guess` repository to your computer.  Navigate to the root of your project and run `npm install` in a terminal to download the nessesary `inquirer` npm packages.  
   
2. Open a node termial to run the `index.js` file.

4. liri.js can take in one of the following commands:

 #### NOTE
 * In additi
     
### NPM Package used

   * [Inquirer](https://www.npmjs.com/package/inquirer)
