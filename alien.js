// create class for aliens just like the Player class
class Alien {
  constructor(canvas, x, y) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    // Player's movement Speed
    this.velocity = {
      x: 0,
      y: 0,
    };
    
    // Alien sprite image
    const image = new Image();
    image.src = './Assets/R (1).png';
    image.onload = () => {
      
      this.image = image;
      // Render the images to scale of canvas.. Hard code img size causes img to squish
      this.width = image.width * 0.1;
      this.height = image.height * 0.1;
      
      // Aliens position
      this.position = {
        x: x,
        y: y,
      };
      
      // give alien the hitbox
      this.hitbox = new Hitbox(
        this.position.x,
        this.position.y,
        this.width,
        this.height
        );
    };
  };

  draw() {
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
      this.position.y += this.velocity.y;
      this.hitbox.updateHitboxPosition(this.position.x, this.position.y);
      this.draw();
    }
  }

  getPosition() {
    return {
      x: this.position.x,
      y: this.position.y,
    };
  };

  getHitbox() {
    return this.hitbox;
  };
};
