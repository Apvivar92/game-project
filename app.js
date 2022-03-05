//start screen for player to read instructions and begin.
let startGameDiv = document.getElementById("start-screen");
let gameCanvas = document.getElementById("myCanvas");
let gameOverDiv = document.getElementById("game-over");


gameCanvas.width = window.innerWidth;
gameCanvas.height = window.innerHeight;

let context = gameCanvas.getContext('2d');
let projectiles = [];
let player = new Player(gameCanvas, projectiles);
let alien = new Alien(gameCanvas);
// let grids = [new Grid()];

function startGame() {
    
    // Add toggle function into startGame function to toggle between start screen to game
    startGameDiv.style.display = "none";
    gameCanvas.style.display = "block";
    gameOverDiv.style.display = "none";

    animate()
    
};

function animate() {
    requestAnimationFrame(animate)
    context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    alien.update()
    player.update()
    projectiles.forEach((projectile) => {
        projectile.update()
    })

    // grids.forEach(grid => {
    //     grid.update()
    //     grid.alien.forEach(alien => {
    //         alien.update()
    //     })
    // })
}

// Game over screen for when player fails
function gameOver() {
    startGameDiv.style.display = "none";
    gameCanvas.style.display = "none";
    gameOverDiv.style.display = "block";
};

// Make the screen swap between the start screen to the game when start game button is pressed
function toggleDisplay(id,toggle) {
    let element = document.getElementById(id);
    // Ternary statement taking 3 operands instead of if else statement
    // Cite: https://www.javatpoint.com/javascript-ternary-operator#:~:text=The%20ternary%20operator%20assigns%20a%20value%20to%20the,is%20the%20same%20as%20the%20if-else%20conditional%20statement.
    let display = ( toggle ) ? 'block' : 'none';
    element.style.display = display;
}











// image won't load due to being called once.
// create a function to call it multiple times to load image.
// Cite for requestAnimationFrame function: https://techfunda.com/howto/963/requestanimationframe#:~:text=requestAnimationFrame%20is%20an%20method%20in%20JavaScript%20%7B%20requestAnimationFrame,an%20animation%20before%20the%20next%20level%20of%20animation.
// function animate() {
//     requestAnimationFrame(animate)
//     // context.fillStyle = 'black'
//     // context.fillRect(0, 0, gameCanvas.width, gameCanvas.height)
//     player.update()
//     // projectiles.forEach((projectile) => {
//     //     projectile.update()
//     // })
// }