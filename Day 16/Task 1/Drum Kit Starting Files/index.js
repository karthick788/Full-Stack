function makeSound(n) {
  if (n == "w") {
    new Audio("sounds/tom-1.mp3").play();
  } else if (n == "a") {
    new Audio("sounds/tom-2.mp3").play();
  } else if (n == "s") {
    new Audio("sounds/tom-3.mp3").play();
  } else if (n == "d") {
    new Audio("sounds/tom-4.mp3").play();
  } else if (n == "j") {
    new Audio("sounds/snare.mp3").play();
  } else if (n == "k") {
    new Audio("sounds/kick-bass.mp3").play();
  } else if (n == "l") {
    new Audio("sounds/crash.mp3").play();
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener('keydown', function(event) {
  var key = event.key.toLowerCase();
  if (!['w', 'a', 's', 'd', 'j', 'k', 'l'].includes(key)) return;

  makeSound(key);
  buttonAnimation(key);
});
