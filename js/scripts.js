// backend

  function randomRoll() {
      return Math.floor(Math.random() * (1 + 6 - 1) ) + 1;
  }

  var diceNumberArrays= [];



// frontend
$(document).ready(function() {
  $("#playerOneRoll").click(function(event){
    event.preventDefault();

// roll random numbers
    var roll= randomRoll();
    diceNumberArrays.push(roll);

// add tallies
    var tallyTotal = 0;
    for (var i =0; i < diceNumberArrays.length; i++) {
      tallyTotal += parseInt(diceNumberArrays[i]);
    };

    $("#playerOneCurrentDice").text(roll);
    $("#playerOneTally").text(diceNumberArrays);
    $("#playerOneTotal").text(tallyTotal);
  });

});
