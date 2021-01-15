var secret = 7;
document.getElementById("buttonGuess") = guess;





function buttonGuess() {
    while (answer != secret) {
        var guess = prompt("Guess a number (1-10)");
        var answer = parseInt(guess);



        if (answer == secret) {
            alert("Correct, well done");
            break;
        } else if (answer > secret) {
            alert("Incorrect, too high.");

        } else if (answer < secret) {
            alert("Incorrect, too low.");


        }


    }
}