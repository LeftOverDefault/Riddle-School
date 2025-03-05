class GameLoop {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext("2d");

        this.currentRoom = "hallway_1"

        this.init();
    }

    init() {
        this.rooms = {};
    }

    start() {
        let lastTime = 0;
        const gameLoop = (timestamp) => {
            let deltaTime = (timestamp - lastTime) / 1000;
            lastTime = timestamp;

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.rooms[this.currentRoom].objects.forEach(object => {
                object.update(deltaTime);
                // object.render(this.ctx);
                this.ctx.drawImage(...object.draw());
            });

            this.ctx.drawImage(this.phil.image, this.phil.position.x, this.phil.position.y, this.phil.size.x, this.phil.size.y);


            requestAnimationFrame(gameLoop);
        }

        gameLoop(0);
    }
}
