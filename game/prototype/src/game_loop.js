class GameLoop {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext("2d");

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

            requestAnimationFrame(gameLoop);
        }

        gameLoop(0);
    }
}
