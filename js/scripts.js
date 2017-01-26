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
  } else {
    this.turnScore += this.roll;
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
    playerOne.turnTotal();

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
  })
});
