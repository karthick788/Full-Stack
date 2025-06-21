var random1 = Math.floor(Math.random() * 6) + 1;
var dice = "dice" + random1 + ".png";
var source1 = "images/" + dice;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", source1);
var random2 = Math.floor(Math.random() * 6) + 1;
var dice = "dice" + random2 + ".png";
var source = "images/" + dice;
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", source);

var header= document.querySelector ("h1");
if (random1 > random2) {
    header.innerHTML = "🚩 Player 1 Wins!";
}
else if(random1 < random2){
    header.innerHTML = "Player 2 Wins 🚩!";
}
else{
    header.innerHTML = "Draw!";
}