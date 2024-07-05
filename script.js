var cards = [];
var score = 0;

function init() {
  // Create 20 cards.
  for (var i = 0; i < 20; i++) {
    var card = document.createElement("div");
    card.className = "card";
    card.id = i;

    // Add the card to the game area.
    document.getElementById("cards").appendChild(card);

    // Add an event listener to the card.
    card.addEventListener("click", flipCard);

    // Add the card to the cards array.
    cards.push(card);
  }

  // Shuffle the cards.
  cards.sort(function() {
    return Math.random() - 0.5;
  });

  // Hide all of the cards.
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.add("face-down");
  }
}

function flipCard(event) {
  var card = event.target;

  // Check if the card is already face up.
  if (card.classList.contains("face-up")) {
    return;
  }

  // Flip the card.
  card.classList.remove("face-down");
  card.classList.add("face-up");

  // Check if the card matches another card.
  for (var i = 0; i < cards.length; i++) {
    if (cards[i] !== card && cards[i].classList.contains("face-up") && cards[i].id === card.id) {
      // The cards match.
      cards[i].classList.add("matched");
      card.classList.add("matched");

      // Increase the score.
      score++;

      // Check if the game is over.
      if (score === 10) {
        alert("You win!");
      }
    }
  }
}

window.onload = init;

