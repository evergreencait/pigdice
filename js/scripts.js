// backend
function Player(){
  this.roll = 0;
  this.gameScore = 0;
  this.turnScore = 0;
}

var players= [];
var playerOne = new Player();
var playerTwo = new Player();
players.push(playerOne, playerTwo);

function randomRoll () {
  return parseInt(Math.floor(Math.random() * 6 ) + 1);
}


Player.prototype.turnTotal = function () {
  if(this.roll === 1) {
    this.turnScore = 0;
    return false;
  } else {
    this.turnScore += this.roll;
    return true;
  }
}

Player.prototype.gameTotal = function() {
  this.gameScore += this.turnScore;
}

Player.prototype.clearScores = function() {
  this.roll = 0;
  this.turnScore = 0;
}

Player.prototype.win = function () {
  if (this.gameScore >= 100) {
    alert("you won!");
    this.gamesScore = 0;
  }
}


// frontend
$(document).ready(function() {
  $("#playerOneRoll").click(function(event){
    event.preventDefault();

    playerOne.roll = randomRoll();
    if (!playerOne.turnTotal()) {
      alert("You rolled a one, I'm sure you'll do better");
      $(".playerTwoGame").toggle();
      $(".playerOneGame").toggle();
    }


    $("#playerOneDice").text(playerOne.roll);
    $("#playerOneTotal").text(playerOne.turnScore);
  });

// playerone Hold click function
  $("#playerOneHold").click(function(event) {
    event.preventDefault();

     playerOne.gameTotal();
     playerOne.win();
     playerOne.clearScores();

     $("#playerOneDice").text(playerOne.roll);
     $("#playerOneTotal").text(playerOne.turnScore);
    $("#gameTotalScore").text(playerOne.gameScore);

    $(".playerOneGame").toggle();
    $(".playerTwoGame").toggle();
  });
// player two
  $("#playerTwoRoll").click(function(event){
    event.preventDefault();

    playerTwo.roll = randomRoll();
    if (!playerTwo.turnTotal()) {
      alert("You rolled a one, I'm sure you'll do better");
      $(".playerTwoGame").toggle();
      $(".playerOneGame").toggle();
    }

    $("#playerTwoDice").text(playerTwo.roll);
    $("#playerTwoTotal").text(playerTwo.turnScore);
  });

// playertwo Hold click function
  $("#playerTwoHold").click(function(event) {
    event.preventDefault();

     playerTwo.gameTotal();
     playerTwo.win();
     playerTwo.clearScores();

     $("#playerTwoDice").text(playerTwo.roll);
     $("#playerTwoTotal").text(playerTwo.turnScore);
    $("#gameTotalScore2").text(playerTwo.gameScore);

    $(".playerTwoGame").toggle();
    $(".playerOneGame").toggle();
  });
});
