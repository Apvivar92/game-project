// User ship projectiles
class Projectile {
    constructor({position, velocity}){
        this.position = position
        this. velocity = velocity

        this.radius = 5
    }

    draw() {
        context.beginPath()
        // cite https://www.javascripttutorial.net/web-apis/javascript-arc/#:~:text=Introduction%20to%20the%20%EE%80%80JavaScript%20arc%EE%80%81%20%28%29%20method.%20The,draws%20a%20circular%20%EE%80%80arc%EE%80%81%20centered%20at%20%28x%2Cy%20
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        context.fillStyle = 'red'
        context.fill()
        context.closePath()
    }
    // update animations
    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

const player = new Player()
const projectiles = []
player.draw()

// image won't load due to being called once.
// create a function to call it multiple times to load image.
// Cite for requestAnimationFrame function: https://techfunda.com/howto/963/requestanimationframe#:~:text=requestAnimationFrame%20is%20an%20method%20in%20JavaScript%20%7B%20requestAnimationFrame,an%20animation%20before%20the%20next%20level%20of%20animation.
function animate() {
    requestAnimationFrame(animate)
    context.fillStyle = 'black'
    context.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    projectiles.forEach((projectile) => {
        projectile.update()
    })
}

animate()

// user inputs to control ship
addEventListener('keydown', ({key}) => {
    switch (key) {
        case 'ArrowLeft':
            console.log('left')
            player.velocity.x = -5
            break
        case 'ArrowRight':
            console.log('right')
            player.velocity.x = 5
            break
        case ' ':
            console.log('FIRE!')
            projectiles.push(
                new Projectile({
                    position: {
                        x: player.position.x + player.width /2,
                        y:player.position.y
                    },
                    velocity: {
                        x: 0,
                        y: -7
                    }
                })
            )
            break
    }
})

addEventListener('keyup', ({key}) => {
    switch (key) {
        case 'ArrowLeft':
            console.log('Stop left')
            player.velocity.x = 0
            break
        case 'ArrowRight':
            console.log('stop right')
            player.velocity.x = 0
            break
        case ' ':
            console.log('Cease FIRE!')
    }
})