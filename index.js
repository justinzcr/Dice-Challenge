var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log("1st random number is " + randomNumber1);
console.log("2nd random number is "+randomNumber2);
var dice1Name = "images/dice" + randomNumber1 + ".png";
var dice2Name = "images/dice" + randomNumber2 + ".png";
document.querySelector("#dice1").setAttribute("src", dice1Name);
document.querySelector("#dice2").setAttribute("src", dice2Name);

if (randomNumber1 > randomNumber2) {
    document.firstElementChild.querySelector("h1").innerHTML = "🏳️Player 1 won!";
} else if (randomNumber2 > randomNumber1) {
    document.firstElementChild.querySelector("h1").innerHTML = "🏳️Player 2 won!";
} else { 
    document.firstElementChild.querySelector("h1").innerHTML = "🏳️🏳️Its a draw!!!🏳️🏳️";
}

function onclickButton() {
    location.reload();
 }
document.querySelector("button").onclick = onclickButton;