let currentscore = 0;
let player1score = 0;
let player2score = 0;
let randomNumber = 0;
let player = 1;

const gamestart = document.getElementById("gamestart");
const roll = document.getElementById("roll");
const hold = document.getElementById("hold");
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");



const rolldice = function() {
  randomNumber = Math.floor(Math.random() * 6) + 1;

  if (randomNumber === 1) {    document.getElementById("diceimage").src="images/dice_one.png";   }
  else if (randomNumber === 2) {    document.getElementById("diceimage").src="images/dice_two.png";  }
  else if (randomNumber === 3) {    document.getElementById("diceimage").src="images/dice_three.png";  }
  else if (randomNumber === 4) {    document.getElementById("diceimage").src="images/dice_four.png";  }
  else if (randomNumber === 5) {    document.getElementById("diceimage").src="images/dice_five.png";  }
  else if (randomNumber === 6) {    document.getElementById("diceimage").src="images/dice_six.png";  }

  if (randomNumber !== 1) {
    currentscore += randomNumber;

    showCurrentScore();
  } else {
    currentscore = 0;

    showCurrentScore();
    changePlayer();
  }
  
}

function addToTotalScore(currentplayer, score)
{
  if (currentplayer === 1)  {    player1score += score;  }
    else if (currentplayer === 2)  {    player2score += score;  }
}


function changePlayer() {
  if (player === 1) {
    player = 2;
    showElem(dot2);
    hideElem(dot1);
  } else {
    player = 1;
    showElem(dot1);
    hideElem(dot2);
  }
  return rolldice;
}

function showCurrentScore() {
  if (player === 1) {
    document.getElementById("currentscore1").innerHTML = currentscore;
  } else {
    document.getElementById("currentscore2").innerHTML = currentscore;
  }
}

function showTotalScore() {
  if (player === 1) {
    document.getElementById("score1").innerHTML = player1score;
  } else {
    document.getElementById("score2").innerHTML = player2score;
  }
}

function holdscore() {
  // stock le score du joueur
  addToTotalScore(player, currentscore);
  showTotalScore();
  currentscore = 0;
  showCurrentScore();

  if (player1score >= 100)//Si l'un des joueurs a plus que 100
  {//WIN
    alert("Congratulations Player 1 !! You WON!")
  } else if (player2score >= 100) {
    alert("Congratulations Player 2 !! You WON!")
  }
  else
  {//Continue
    changePlayer();
  }
  
}

function showElem(elem) {
  elem.style.display = "inline-block";
}

function hideElem(elem) {
  elem.style.display = "none";
}

function newgame() {
  currentscore = 0;
  player1score = 0;
  player2score = 0;
  randomNumber = 0;
  player = 1;
  document.getElementById("diceimage").src="images/dice_one.png";
  showElem(dot1);
  hideElem(dot2);
  document.getElementById("currentscore1").innerHTML = 0;
  document.getElementById("currentscore2").innerHTML = 0;
  document.getElementById("score1").innerHTML = 0;
  document.getElementById("score2").innerHTML = 0;
}


roll.addEventListener("click", rolldice);
hold.addEventListener("click", holdscore);
gamestart.addEventListener("click", newgame);
