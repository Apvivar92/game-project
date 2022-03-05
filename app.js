//start screen for player to read instructions and begin.
let startGameDiv = document.getElementById('start-screen');
let gameCanvas = document.getElementById('myCanvas');
let gameOverDiv = document.getElementById('game-over');

gameCanvas.width = window.innerWidth;
gameCanvas.height = window.innerHeight;

let context = gameCanvas.getContext('2d');
let projectiles = [];
let player = new Player(gameCanvas, projectiles);
let alien = new Alien(gameCanvas);

function startGame() {
  // Add toggle function into startGame function to toggle between start screen to game
  startGameDiv.style.display = 'none';
  gameCanvas.style.display = 'block';
  gameOverDiv.style.display = 'none';

  setInterval(runGame, 15);
};

function runGame() {
  context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  alien.update();
  player.update();

  projectiles.forEach((projectile, p) => {
    projectile.update();

    // checks if object's hitbox intersects
    if(projectile.getHitbox().intersects(alien.getHitbox())){      
      // console.log("Hit");
      // projectile hit alien - handle collision
      projectiles = projectiles.filter((v, projectileIndex) => {
        return p != projectileIndex;
      });
      player.updateProjectiles(projectiles);
    }
    else {
      // console.log("No hit");
    }

    
  });
};

// Game over screen for when player fails
function gameOver() {
  startGameDiv.style.display = 'none';
  gameCanvas.style.display = 'none';
  gameOverDiv.style.display = 'block';
}
