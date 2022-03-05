// create user ship with a class then with constructors, define Player's properties.
class Player {
  constructor(canvas, projectiles) {
    this.projectiles = projectiles;
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    // Player's movement Speed
    this.velocity = {
      x: 0,
    };
    // Players ship image
    const image = new Image();
    image.src = './Assets/userShip.png';
    image.onload = () => {
    this.image = image;
    // Render the images to scale of canvas.. Hard code img size causes img to squish
    this.width = image.width * 0.15;
    this.height = image.height * 0.15;

    // players position
    this.position = {
      x: this.canvas.width / 2 - this.width / 2,
      y: this.canvas.height - this.height - 20,
    }};
    this.setupControls();
  }

  setupControls() {
    // user inputs to control ship
    addEventListener('keydown', ({ key }) => {
      switch (key) {
        case 'ArrowLeft':
          this.velocity.x = -5;
          break;
        case 'ArrowRight':
          this.velocity.x = 5;
          break;
        case ' ':
          this.projectiles.push(
            new Projectile(this.canvas, {
              position: {
                x: player.position.x + player.width / 2,
                y: player.position.y,
              },
              velocity: {
                x: 0,
                y: -7,
              },
            })
          );
          break;
      }
    });

    addEventListener('keyup', ({ key }) => {
      switch (key) {
        case 'ArrowLeft':
          this.velocity.x = 0;
          break;
        case 'ArrowRight':
          this.velocity.x = 0;
          break;
        case ' ':
          break;
      }
    });
  }

  draw() {
    // context.fillStyle = 'red'
    // context.fillRect(this.position.x, this.position.y, this.width, this.height)
    if (this.image) {
      this.context.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }
  }

  update() {
    if (this.image) {
      this.position.x += this.velocity.x;
      this.draw();
    }
  }

  updateProjectiles(projectiles) {
    this.projectiles = projectiles;
  }

  getPosition() {
    return {
      x: this.position.x,
      y: this.position.y,
    };
  }
}
