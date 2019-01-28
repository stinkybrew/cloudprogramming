
var counter;

// I HAD A BIT OF UNSOLVED PROBLEMS HERE. I COULDNT GET "VAR USERNAME" WORK GLOBALLY.
// THATS WHY THIS IS A BIT OF MESS...

function init() {
    //This function sets up an event listener on the form.
    let targetNumber = Math.floor(Math.random() * 10) + 1;
    var UserNumber = document.getElementById("number").value;
    console.log("guess number between 1-10");
    check();

    function check(UserNumber) {
        var UserNumber = document.getElementById("number").value;
        //functio value from the event listener and check it against the `targetNumber`.
        if (targetNumber == UserNumber){
            showWin(); // TOIMII
        }
        else {
            showError(); //TOIMII
        }
    }
    function showWin(UserNumber) {
        var UserNumber = document.getElementById("number").value;
        //function to  show a message on the console telling the player they win.
        console.log("Your guess " + UserNumber +" was correct! You won the game! Press F5 to start over");
        console.log(UserNumber + " was a right answer");
    }
    function showError(UserNumber) {
        var UserNumber = document.getElementById("number").value;
        //function to show a message on the console telling the player their guess is incorrect.
        counter += 1;
        if (counter == 5) {    // didn't get this working
            showLoss();
        }
        else {
            console.log("Your guess " + UserNumber + " was wrong!!!. guess again!");
            console.log("Right anser was " + targetNumber);                         // JUST FOR TESTING IT WORKS
            console.log("you have " , 5 - counter , " attempts to go.");
        }
    }
    function showLoss() {
        //function to show a message on the console telling the player they lose.
        console.log("Your guess was AGAIN incorrect! GAME OVER! Press F5 to start again.");

    }
}