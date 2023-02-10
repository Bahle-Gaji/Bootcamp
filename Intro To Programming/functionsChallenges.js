// 1. Arithemetic with functions

function add(num1, num2){
    return num1 + num2;
};

function multiply(num1, num2){
    return num1 * num2;
};

console.log(add(multiply(36325, 9824), 777));

// // 2. Are these arrays the same

function areArraysSame(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    else{
        for(let i = 0; i < arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                return false;
            }
        };
        return true;
    };
};
// 
console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));

// // 3. Hangman with functions

// Write your functions here


var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
    break;
    } 
    else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
};

showAnswerAndCongratulatePlayer(answerArray);


function pickWord(){
    let words = ["javascript","monkey", "amazing", "pancake", 'cattle', 'adjacent', 'remorse', 'superstitious'];
    var word = words[Math.floor(Math.random() * words.length)];

    return word;
};

function setupAnswerArray(word){
    var answerArray = [];
    for(let i = 0; i < word.length; i++){
        answerArray[i] = "_";
    };
    return answerArray;
};

function showPlayerProgress(answerArray){
    alert(answerArray.join(' '));
};

function getGuess(){
    let guess = prompt("Enter a letter as a guess, or click Cancel to quit");

    return guess.toLowerCase();
};

function updateGameState(){
    let attempts = 0;
    while((remainingLetters > 0) && (attempts < 10)){
        // Limiting guesses
            alert(answerArray.join(" "));
            
            //Capital letters
            var guess = prompt("Enter a letter as a guess, or click Cancel to quit");
            guess = guess.toLowerCase();
    
            //Player doesn't want to continue
            if(guess === null){
                alert("Thank you for playing");
                break;
            }
            else if(guess.length !== 1){
                alert("Please enter a single letter")
            }
            else{
                for(let j = 0; j < word.length; j++){
                    //Fixing bug ***
                    if((word[j] === guess) && (answerArray[j] === '_')){
                    // if(randomWord[j] === guess){
                    answerArray[j] = guess;
                        remainingLetters--;
                    }else{
                        continue;
                    }
                };
            attempts++;
        };
    };
};

function showAnswerAndCongratulatePlayer(answerArray){
    if(word == answerArray.join("")){
        alert(answerArray.join(""));
        alert("Good job! The answer was " + word);    
    }
    else{
        alert("Sorry, you ran out of guesses.")
    };
};