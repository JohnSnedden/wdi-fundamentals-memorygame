
// create card arrays
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId])  // log message of card flipped

  cardsInPlay.push(cards[cardId])  // add flipped card to cards in play array

  if (cardsInPlay.length === 2) {  // check to see if two cards have been chosen
    checkForMatch();
  }
}

flipCard(0);
flipCard(2);
