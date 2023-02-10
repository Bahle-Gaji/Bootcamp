var secret = Math.floor(Math.random() * 11);
console.log(secret);

var attempts = 0;

while(attempts < 3 ){
    var guess = parseInt(prompt("Please guess the secret number (1-10)"));
    if(guess === secret){
        alert("Correct");
        break;
    }
    else if(guess < secret){
        alert("Incorrect, too low");
    }
    else{
        alert("Incorrect, too high")
    }
    attempts++; 
};

