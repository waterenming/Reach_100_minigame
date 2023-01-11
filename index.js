let currentscore1 = 0;
let currentscore2 = 0;
let player1score = 0;
let player2score = 0;
let randomNumber = 0;

const gamestart = document.getElementById("gamestart");
const roll = document.getElementById("roll");
const hold = document.getElementById("hold");

gamestart.addEventListener("click", start);

function start() {

}


const rolldice = function() {
    randomNumber = Math.floor(Math.random() * 6) + 1;

//const diceface = document.getElementById("diceimage");

if (randomNumber === 1) {
    document.getElementById("diceimage").src="images/dice_one.png"; 
  }
  else if (randomNumber === 2) {
    document.getElementById("diceimage").src="images/dice_two.png";
  }
  else if (randomNumber === 3) {
    document.getElementById("diceimage").src="images/dice_three.png";
  }
  else if (randomNumber === 4) {
    document.getElementById("diceimage").src="images/dice_four.png";
  }
  else if (randomNumber === 5) {
    document.getElementById("diceimage").src="images/dice_five.png";
  }
  else if (randomNumber === 6) {
    document.getElementById("diceimage").src="images/dice_six.png";
  }
  
}

roll.addEventListener("click", rolldice);




