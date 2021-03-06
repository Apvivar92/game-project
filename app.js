//start screen for player to read instructions and begin.
let startGameDiv = document.getElementById('start-screen');
let gameCanvas = document.getElementById('myCanvas');
let gameOverDiv = document.getElementById('game-over');
let gameWinDiv = document.getElementById('game-win');
let scoreboard = document.getElementById('scoreboard');
let scoreCounter= document.getElementById('scorecounter');
let difficultyCounter = document.getElementById('difficultycounter');

// 
let runGameInterval;
let increaseDifficultyInterval;

let difficultyRating = 1;

let score = 0;

gameCanvas.width = window.innerWidth;
gameCanvas.height = window.innerHeight;

let context = gameCanvas.getContext('2d');

let projectiles = [];
let player = new Player(gameCanvas, projectiles);
let aliens = [];

function startGame() {
  // Swap displays
  startGameDiv.style.display = 'none';
  gameCanvas.style.display = 'block';
  gameOverDiv.style.display = 'none';
  gameWinDiv.style.display = 'none';
  scoreboard.style.display = 'block';

  spawnAliens();

  runGameInterval = setInterval(runGame, 15);
  increaseDifficultyInterval = setInterval(increaseDifficulty, 10000);
};

function runGame() {
  context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  
  player.update();

  aliens.forEach((alien, a) => {
    alien.update();

    projectiles.forEach((projectile, p) => {
      projectile.update();

      if (alien.getHitbox().intersects(projectile.getHitbox())) {
        updateScore();

        aliens = aliens.filter((_v, alienToRemove) => {
          return a != alienToRemove;
        });

        projectiles = projectiles.filter((_v, projToRemove) => {
          return p != projToRemove;
        });

        player.updateProjectiles(projectiles);
      }
    });

    if (aliens.length == 0) {
      increaseDifficulty();
      spawnAliens();
    }

    // if difficulty rating = 15 = win
    // if aliens exceed over 45 = lose
    if (aliens.length > 40) {
      gameOver();
    }
    else if (difficultyRating == 15){
      gameWin();
    }

    updateDifficultyRating();
  });
}

// window.onload = function () {
//   let image = new Image();
//   image.src = 'Assets/City.png'

//   image.onload = function () {
//     fillCanvas(image);
//   };

//   function fillCanvas(image) {
//     this.canvas.width = image.width;
//     this.canvas.width = image.height;

//     this.context.drawImage(image, 0, 0);
//   };
// };

function spawnAliens() {
  for(let i = 0; i < difficultyRating; i++){
    aliens.push(
      new Alien(gameCanvas, Math.random() * 800, Math.random() * 700)
    );
  };
};

// Need a way to update score on the html
// score is added for each alien shot plus the number of the difficulty rate
function updateScore() {
  score += difficultyRating;
  scoreCounter.innerHTML = score;
};

function increaseDifficulty() {
  difficultyRating++;
  updateDifficultyRating();
  spawnAliens();
};

function updateDifficultyRating() {
  difficultyCounter.innerHTML = difficultyRating;
};

// Game over screen for when player fails
function gameOver() {
  clearInterval(runGameInterval);
  clearInterval(increaseDifficultyInterval);
  updateFinalScoreLoss();

  startGameDiv.style.display = 'none';
  gameCanvas.style.display = 'none';
  gameOverDiv.style.display = 'block';
  gameWinDiv.style.display = 'none';
  
};

function gameWin() {
  clearInterval(runGameInterval);
  clearInterval(increaseDifficultyInterval);
  updateFinalScoreWin();

  startGameDiv.style.display = 'none';
  gameCanvas.style.display = 'none';
  gameOverDiv.style.display = 'none';
  gameWinDiv.style.display = 'block';

};

function updateFinalScoreWin() {
  let finalScore = document.getElementById('finalscorewin');
  finalScore.innerHTML = score;
};

function updateFinalScoreLoss() {
  let finalScore = document.getElementById('finalscoreloss');
  finalScore.innerHTML = score;
};

function reloadGame() {
  document.location.reload();
};

// let baseImage = new Image();
// baseImage.src = 'Assets/City.png'
// baseImage.onload = () => {
//   baseImage = image;
//       // Render the images to scale of canvas.. Hard code img size causes img to squish
//       this.width = image.width * 0.1;
//       this.height = image.height * 0.1;
      
//       // Aliens position
//       this.position = {
//         x: x,
//         y: y,
//       };
// }