// Your solution goes here 
function playGuessingGame(numToGuess, totalGuesses=10){
    let userGuesses = 0;
    let prev;
    let guess;

    while (userGuesses < totalGuesses){
        if (guess == numToGuess){
            return userGuesses + 1;
        }
        if (userGuesses == 0){
            guess = prompt("Enter a number between 1 and 100.");
            if (guess == null) {
                return 0;
            } else if (guess == "" || isNaN(guess)){
                while (guess == "" || isNaN(guess)){
                    guess = prompt("Please enter a number.");
                }
            }
            prev = guess;
            userGuesses++;
        } else {
            if (prev < numToGuess){
                guess = prompt(prev + " is too small. Guess a larger number.");
                if (guess == null) {
                    return 0;
                } else if (guess == numToGuess){
                    return userGuesses + 1;
                } else if (guess == "" || isNaN(guess)){
                    while (guess == "" || isNaN(guess)){
                        guess = prompt("Please enter a number.");
                    }
                }
                userGuesses++;
                prev = guess;
            } else if (prev > numToGuess) {
                guess = prompt(prev + " is too large. Guess a smaller number.");
                if (guess == null) {
                    return 0;
                } else if (guess == numToGuess){
                    return userGuesses + 1;
                } else if (guess == "" || isNaN(guess)){
                    while (guess == "" || isNaN(guess)){
                        guess = prompt("Please enter a number.");
                    }
                }
                userGuesses++;
                prev = guess;
            } 
        }
    }
    if (guess == numToGuess){
        return userGuesses;
    }

    return 0;
}
