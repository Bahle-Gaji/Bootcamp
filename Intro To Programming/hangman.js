//Initialize words, More words
var words = ["javascript","monkey", "amazing", "pancake", 'cattle', 'adjacent', 'remorse', 'superstitious'];
var randomWord = words[Math.floor(Math.random() * words.length)];

//To display letters as underscores
var answerArray = [];
for(let i = 0; i < randomWord.length; i++){
    answerArray[i] = "_";
};

var attempts = 0;
var remainingLetters = randomWord.length;

console.log(randomWord);
console.log(answerArray);

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
            for(let j = 0; j < randomWord.length; j++){
                //Fixing bug ***
                if((randomWord[j] === guess) && (answerArray[j] === '_')){
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

//Player guesses successfully
if(randomWord == answerArray.join("")){
    alert(answerArray.join(""));
    alert("Good job! The answer was " + randomWord);    
}
else{
    alert("Sorry, you ran out of guesses.")
}


