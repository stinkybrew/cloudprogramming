//Here i chech if input i valid
function checkInp()
{
    var x=document.getElementById("x").value;
    var regex=/^[0a-zA-Z]+$/;
    if (x.match(regex)) {
        alert("input must be numbers and bigger than 0");
        return false;
    }
    if (x < 1) {
        alert("input number should be bigger that 0");
        return false;
    }
    var x=document.getElementById("y").value;
    var regex=/^[a-zA-Z]+$/;
    if (x.match(regex)) {
        alert("input must be numbers and bigger than 0");
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
	document.getElementById("x").value * document.getElementById("y").value;
}
function divideBy(){

	document.getElementById("result").innerHTML =
	document.getElementById("x").value / document.getElementById("y").value;
}