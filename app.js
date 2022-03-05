//start screen for player to read instructions and begin.
let startGameDiv = document.getElementById('start-screen');
let gameCanvas = document.getElementById('myCanvas');
let gameOverDiv = document.getElementById('game-over');
let frameCount = 0;

gameCanvas.width = window.innerWidth;
gameCanvas.height = window.innerHeight;

let context = gameCanvas.getContext('2d');
let projectiles = [];
let player = new Player(gameCanvas, projectiles);
let alien = new Alien(gameCanvas);
// let grid = [new Grid(gameCanvas)];

function startGame() {
  // Add toggle function into startGame function to toggle between start screen to game
  startGameDiv.style.display = 'none';
  gameCanvas.style.display = 'block';
  gameOverDiv.style.display = 'none';

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  alien.update();
  player.update();

  if (frameCount % 600 === 0) {
    printPosition('Player ', player.getPosition());
    printPosition('Alien ', alien.getPosition());
  }

  projectiles.forEach((projectile, i) => {
    projectile.update();

    if (frameCount % 600 === 0) {
      printPosition('Projectile ' + i.toString(), projectile.getPosition());
    }
  });

  // grids.forEach(grid => {
  //     grid.update()
  //     grid.alien.forEach(alien => {
  //         alien.update()
  //     })
  // })
  frameCount++;
}

function printPosition(tag, { x, y }) {
  console.log(tag);
  console.log(x + ' ' + y);
}

// Game over screen for when player fails
function gameOver() {
  startGameDiv.style.display = 'none';
  gameCanvas.style.display = 'none';
  gameOverDiv.style.display = 'block';
}

// Make the screen swap between the start screen to the game when start game button is pressed
// function toggleDisplay(id,toggle) {
//     let element = document.getElementById(id);
//     // Ternary statement taking 3 operands instead of if else statement
//     // Cite: https://www.javatpoint.com/javascript-ternary-operator#:~:text=The%20ternary%20operator%20assigns%20a%20value%20to%20the,is%20the%20same%20as%20the%20if-else%20conditional%20statement.
//     let display = ( toggle ) ? 'block' : 'none';
//     element.style.display = display;
// }
