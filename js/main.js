
// create card arrays
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {  // check to see if two cards have been chosen
  if (cardsInPlay[0] === cardsInPlay[1]) {  // check if  the two cards match
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

// output selected card values to console
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
