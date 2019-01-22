//Here i chech if input i valid
function checkInp()
{
    var x=document.getElementById("firstNumber").value;
    var regex=/^[a-zA-Z]+$/;
    if (x.match(regex)) {
        alert("input must be numbers");
        return false;
    }
    if (x < 1) {
        alert("input number should be bigger that 0");
        return false;
    }
    var x=document.getElementById("secondNumber").value;
    var regex=/^[a-zA-Z]+$/;
    if (x.match(regex)) {
        alert("input must be numbers");
        return false;
    }
    if (x < 1) {
        alert("input number should be bigger that 0");
        return false; 
    }
}

//calculation
function multiplyBy(){

	document.getElementById("result").innerHTML =
	document.getElementById("firstNumber").value * document.getElementById("secondNumber").value;
}
function divideBy(){

	document.getElementById("result").innerHTML =
	document.getElementById("firstNumber").value / document.getElementById("secondNumber").value;
}