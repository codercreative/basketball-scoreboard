let homeEl = document.getElementById("score-home");
let homePoints = 0;
let guestEl = document.getElementById("score-guest");
let guestPoints = 0;

function homeScores(points) {
  homePoints += points;
  homeEl.textContent = homePoints;
}

function guestScores(points) {
  guestPoints += points;
  guestEl.textContent = guestPoints;
}

function resetGame() {
  homePoints = 0;
  guestPoints = 0;
  homeEl.textContent = homePoints;
  guestEl.textContent = guestPoints;
}
