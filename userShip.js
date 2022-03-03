// Need to select canva element to draw onto
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// create user ship with a class then with constructors, define Player's properties.
class Player {
    constructor() {
        // players position
        this.position = {
            x: canvas.width / 2,
            y: canvas.height - 70
        }
        // Player's movement Speed
        this.velocity = {
            x:0
        }
        // Players sprite image
        // const image = new Image()
        // image.src = 'Assets/userShip.png'

        // this.image = image;
        this.width = 50
        this. height = 50
    }
    
    draw() {
        context.fillStyle = 'red'
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
        // context.drawImage(this.image, this.position.x, this.position.y)
    }
}

const player = new Player()
player.draw()


// image won't load due to being called once.
// create a function to call it multiple times to load image.
// Cite for requestAnimationFrame function: https://techfunda.com/howto/963/requestanimationframe#:~:text=requestAnimationFrame%20is%20an%20method%20in%20JavaScript%20%7B%20requestAnimationFrame,an%20animation%20before%20the%20next%20level%20of%20animation.
function animate() {
    requestAnimationFrame(animate)
    console.log("it's working");
}