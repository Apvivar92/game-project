// Need to select canva element to draw onto
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

// create user ship with a class then with constructors, define Player's properties.
class Player {
    constructor() {
        // players position
        this.position = {
            x: 200,
            y: 200
        }
        // Player's movement Speed
        this.velocity = {
            x:0
        }
        // Players sprite image
        // this.image = 
        this.width = 100
        this. height = 100
    }
    
    draw() {
        context.fillStyle = 'red'
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const player = new Player()
player.draw()
