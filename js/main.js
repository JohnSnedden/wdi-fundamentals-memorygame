
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

var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);  // log message of card flipped
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  cardsInPlay.push(cards[cardId].rank)  // add flipped card to cards in play array

  this.setAttribute('src', cards[cardId].cardImage);

  if (cardsInPlay.length === 2) {  // check to see if two cards have been chosen
    checkForMatch();
  }
}

createBoard = function() {
  for (i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);

    cardElement.addEventListener('click', flipCard);  // trigger click event
    document.getElementById('game-board').appendChild(cardElement);  // add card to board
  }
}

createBoard();
