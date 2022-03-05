// User ship projectiles
class Projectile {
  constructor(canvas, { position, velocity }) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.position = position;
    this.velocity = velocity;
    this.radius = 5;
    this.hitbox = new Hitbox(this.position.x, this.position.y, this.width, this.height);
  };

  draw() {
    this.context.beginPath();
    // have projectile object travel in canvas
    // cite https://www.javascripttutorial.net/web-apis/javascript-arc/#:~:text=Introduction%20to%20the%20%EE%80%80JavaScript%20arc%EE%80%81%20%28%29%20method.%20The,draws%20a%20circular%20%EE%80%80arc%EE%80%81%20centered%20at%20%28x%2Cy%20
    this.context.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      Math.PI * 2
    );
    this.context.fillStyle = 'red';
    this.context.fill();
    this.context.closePath();
  };

  // update animations
  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.hitbox.updateHitboxPosition(this.position.x, this.position.y);
    this.draw();
  };

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
