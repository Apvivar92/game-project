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
    gameOver();
};

// Make the screen swap between the start screen to the game when start game button is pressed
function toggleDisplay(id,toggle) {
    let element = document.getElementById(id);
    // Ternary statement taking 3 operands instead of if else statement
    // Cite: https://www.javatpoint.com/javascript-ternary-operator#:~:text=The%20ternary%20operator%20assigns%20a%20value%20to%20the,is%20the%20same%20as%20the%20if-else%20conditional%20statement.
    let display = ( toggle ) ? 'block' : 'none';
    element.style.display = display;
}