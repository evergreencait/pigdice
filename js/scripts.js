// backend


function randomRoll(bottom, top) {
  return function() {
    return Math.floor(Math.random() * (1 + top - bottom) ) + bottom;
  }
}

var diceNumber = randomRoll (1, 6);

var tally = ""
  for (var i = 0; i < 1; i++) {
    tally += diceNumber + " ";
}

// frontend
$(document).ready(function() {
  $("#playerOneRoll").click(function(event){
    event.preventDefault();

    $("#playerOneTally").append(diceNumber());

  });

});
