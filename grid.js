class Grid                                                     {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d')
        this.position = {
            x:0,
            y:0
        },

        this.velocity = {
            x:0,
            y:0
        };

        this.alien = [new Alien()];
    }

    update() {};
}