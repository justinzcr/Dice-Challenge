var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log("1st random number is " + randomNumber1);
console.log("2nd random number is "+randomNumber2);
var diceName = "images/dice" + randomNumber1 + ".png";
document.querySelector("#dice1").setAttribute("src", diceName)