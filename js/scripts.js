// backend
function Player(){
  this.roll = 0;
  this.rollArray = [];
  this.rollSum = 0;
  this.turnTotalArray = [];
  this.turnScore = 0;
  this.gameScoreArray = [];
  this.gameScore = 0;
}

var playerOne = new Player();

  function randomRoll() {
      return Math.floor(Math.random() * 6 ) + 1;
  }

 Player.prototype.oneRule = function() {
   if (this.roll === 1) {
      playerOne.rollArray = [];
   } else {
     playerOne.rollArray.push(this.roll);
   }
 }

 // add tallies for total tally count
 Player.prototype.tallyCount = function() {
   playerOne.rollSum = 0;
   for (var i =0; i < playerOne.rollArray.length; i++) {
     playerOne.rollSum += parseInt(playerOne.rollArray[i]);
   } if (playerOne.roll !== 1) {
     playerOne.turnTotalArray.push(this.rollSum);
   } else {
     playerOne.turnTotalArray.push(0);
   }
 }

 Player.prototype.turnScoreTally = function() {
   playerOne.turnScore = 0;
   for (var i =0; i < playerOne.turnTotalArray.length; i++) {
     playerOne.turnScore = parseInt(playerOne.turnTotalArray[i]);
   }  if (playerOne.turnScore !== 0) {
     playerOne.gameScoreArray.push(this.turnScore);
   }
 }

 Player.prototype.gameScoreTally = function() {
   playerOne.gameScore = 0;
   for (var i =0; i < playerOne.gameScoreArray.length; i++) {
     playerOne.gameScore += parseInt(playerOne.gameScoreArray[i]);
   }
 }

// frontend
$(document).ready(function() {
  $("#playerOneRoll").click(function(event){
    event.preventDefault();

    playerOne.roll = randomRoll();

    playerOne.oneRule();

    playerOne.tallyCount();

    $("#playerOneCurrentDice").text(playerOne.roll);
    $("#playerOneTally").text(playerOne.rollArray);
    $("#playerOneTotal").text(playerOne.rollSum);
  });

// playerone Hold click function
  $("#playerOneHold").click(function(event) {
    event.preventDefault();

    playerOne.turnScoreTally();
    playerOne.gameScoreTally();

    $("#scoreOne").append("<li>" + playerOne.turnScore + "</li>");
    $("#gameTotalScore").text(playerOne.gameScore);
  })
});
