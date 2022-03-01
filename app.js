//start screen for player to read instructions and begin.
function startGame() {
    // Add toggle function into startGame function to toggle between start screen to game
    // False = start-Screen
    // true = game
    this.toggleDisplay('start-screen', false);
    this.toggleDisplay('myCanvas', true);
    let startGameDiv = document.getElementById("start");
    let gameCanvas = document.getElementById("myCanvas");
    let gameOver = document.getElementById("game-over");
    startGameDiv.style.display = "none";
    gameCanvas.style.display = "block";
    gameOver.style.display = "none";
    startGame();
};

// Game over screen for when player fails
function gameOver() {
    let startGameDiv = document.getElementById("start");
    let gameCanvas = document.getElementById("myCanvas");
    let gameOver = document.getElementById("game-over");
    startGameDiv.style.display = "none";
    gameCanvas.style.display = "none";
    gameOver.style.display = "block";
};

// Make the screen swap between the start screen to the game when start game button is pressed
function toggleDisplay(id,toggle) {
    let element = document.getElementById(id);
    let display = ( toggle ) ? 'block' : 'none';
    element.style.display = display;
}