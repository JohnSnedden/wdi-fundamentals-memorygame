
// card info
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId].rank);  // log message of card flipped
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  cardsInPlay.push(cards[cardId].rank)  // add flipped card to cards in play array

  if (cardsInPlay.length === 2) {  // check to see if two cards have been chosen
    checkForMatch();
  }
}

flipCard(0);
flipCard(2);
