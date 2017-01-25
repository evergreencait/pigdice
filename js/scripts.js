// backend
function Player(roll, rollArray, rollSum){
  this.roll = roll;
  this.rollArray = rollArray;
  this.rollSum = rollSum;
}

  function randomRoll() {
      return Math.floor(Math.random() * (1 + 6 - 1) ) + 1;
  }

  var diceNumberArrays= [];

 Player.prototype.oneRule = function() {
   if (this.roll === 1) {
     this.rollArray = 0;
   }
 }

// frontend
$(document).ready(function() {
  $("#playerOneRoll").click(function(event){
    event.preventDefault();

// roll random numbers then lists each roll in an array
    var roll= randomRoll();
    diceNumberArrays.push(roll);

// add tallies for total tally count
    var tallyTotal = 0;
    for (var i =0; i < diceNumberArrays.length; i++) {
      tallyTotal += parseInt(diceNumberArrays[i]);
    };

    var playerOne = new Player(roll, diceNumberArrays, tallyTotal);


    $("#playerOneCurrentDice").text(roll);
    $("#playerOneTally").text(diceNumberArrays);
    $("#playerOneTotal").text(tallyTotal);
  });

});
