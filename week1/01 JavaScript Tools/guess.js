let targetNumber = Math.floor(Math.random() * 10) + 1;
var UserNumber = document.getElementById("number").value;
var max = 5;

function init() {
    var UserNumber = document.getElementById("number").value;
	//This function sets up an event listener on the form.
    console.log("guess number between 1-10");
    check();
}
function check(UserNumber) {
    var UserNumber = document.getElementById("number").value;
  //function to accept a value from the event listener and check it against the `targetNumber`.
    if (targetNumber == UserNumber){
        showWin();
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
function showError(max, counter, UserNumber) {
  //function to show a message on the console telling the player their guess is incorrect.
    var max = 5;
    var counter = 0;
    if (counter == max) {
        showLoss();
    }
    else {
        var UserNumber = document.getElementById("number").value;
        console.log("Your guess " + UserNumber + " was wrong!!!. guess again!");
        console.log("Right anser was " + targetNumber);                         // JUST FOR TESTING IT WORKS
        console.log("you have " , counter , " attempts to go.");                // Somehove didnt get this to work
    }
}
function showLoss() {
  //function to show a message on the console telling the player they lose.
    console.log("Your guess was AGAIN incorrect! GAME OVER! Press F5 to start again.");
   
}