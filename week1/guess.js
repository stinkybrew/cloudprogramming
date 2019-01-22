let targetNumber = Math.floor(Math.random() * 10) + 1;
let UserNumber = document.getElementById("number").value;    
let max = 5;
let counter = 0;

function init() {
	//function to set up an event listener on the form. The event listener should pass the value of the input element to the `check` function.
    console.log("guess number between 1-10");
}
function check(value) {
  //function to accept a value from the event listener and check it against the `targetNumber`.
    if (targetNumber == UserNumber){
        showWin();
    }
    else {
        showError();
    }
}
function showWin() {
  //function to  show a message on the console telling the player they win.
    console.log("Your guess was correct! You won the game! Press F5 to start over");
}
function showError(counter, max, targetNumber) {
  //function to show a message on the console telling the player their guess is incorrect.
    if (counter == max) {
        showLoss();
    }
    else {
        counter += 1;
        console.log("Your guess whent wrong!!!. guess again!");
        console.log("you have " , counter , " attempts to go.");
        console.log(counter);
        consol.log(targetNumber)
    }
}
function showLoss() {
  //function to show a message on the console telling the player they lose.
    console.log("Your guess was incorrect! GAME OVER! Press F5 to start again.");
   
}

