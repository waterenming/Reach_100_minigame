let currentscore = 0;
let player1score = 0;
let player2score = 0;
let randomNumber = 0;
let player = 0;

const gamestart = document.getElementById("gamestart");
const roll = document.getElementById("roll");
const hold = document.getElementById("hold");


const rolldice = function() {
    randomNumber = Math.floor(Math.random() * 6) + 1;

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

  if (randomNumber !== 1) {
    currentscore += randomNumber;
    score();
  } else {
    changePlayer();
  }
  
}


function changePlayer() {
  if (player === 0) {
  player = player + 1;
  return rolldice;
  } else {
  player = player - 1;
  }
}

function score() {
  if (player === 0) {
    document.getElementById("currentscore1").innerHTML = currentscore
  } else {
    document.getElementById("currentscore2").innerHTML = currentscore
  }
}

function holdscore() {
  
}


roll.addEventListener("click", rolldice);





