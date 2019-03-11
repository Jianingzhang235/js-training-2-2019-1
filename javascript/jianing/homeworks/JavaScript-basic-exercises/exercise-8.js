//JavaScript Basic: Exercise-8 with Solution //Write a JavaScript program where
//the program takes a random integer between 1 to 10, the user is then prompted to
//input a guess number. If the user input matches with guess number, the program
//will display a message "Good Work" otherwise display a message "Not matched"
function guessNumber(num) {
    var randomNum = Math.random() * 9 + 1; //a  number between 1 to 10;
    var randomIntr = Math.floor(randomNum); //get the  random integer;
    if (num === randomIntr) {
        return "Good Work";
    }
    return "Not matched";

}
alert(guessNumber(8));