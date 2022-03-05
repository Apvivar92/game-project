// create user ship with a class then with constructors, define Player's properties.
class Player {
    constructor(canvas, projectiles) {
        this.projectiles = projectiles;
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        // Player's movement Speed
        this.velocity = {
            x:0
        }
        // Players ship image
        const image = new Image()
        image.src = './Assets/userShip.png'
        this.image = image
        this.width = image.width * .15
        this. height = image.height *.15

        // players position
        this.position = {
            x: this.canvas.width / 2 - this.width / 2,
            y: this.canvas.height - this.height - 20
        }
        this.setupControls();
    }

    setupControls() {
        // user inputs to control ship
        addEventListener('keydown', ({key}) => {
            switch (key) {
                case 'ArrowLeft':
                    console.log('left');
                    this.velocity.x = -5;
                    break;
                case 'ArrowRight':
                    console.log('right');
                    this.velocity.x = 5;
                    break;
                case ' ':
                    console.log('FIRE!');
                    this.projectiles.push(
                        new Projectile(
                            this.canvas,
                            {
                            position: {
                                x: player.position.x + player.width /2,
                                y:player.position.y
                            },
                            velocity: {
                                x: 0,
                                y: -7
                            }
                            }
                        )
                    )
                    break;
            }
        })

        addEventListener('keyup', ({key}) => {
            switch (key) {
                case 'ArrowLeft':
                    console.log('Stop left');
                    this.velocity.x = 0;
                    break;
                case 'ArrowRight':
                    console.log('stop right');
                    this.velocity.x = 0;
                    break;
                case ' ':
                    console.log('Cease FIRE!');
            }
        })
    }

    draw() {
        // context.fillStyle = 'red'
        // context.fillRect(this.position.x, this.position.y, this.width, this.height)
        if(this.image){
            this.context.drawImage(
                this.image, 
                this.position.x, 
                this.position.y,
                this.width,
                this.height
            )
        };
    }

    update() {
        if(this.image){
            this.draw()
            this.position.x += this.velocity.x
        }
    }
}
