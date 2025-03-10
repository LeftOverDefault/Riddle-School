//================//
//  DECLARATIONS  //
//================//

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = (9 / 16) * window.innerWidth;

document.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = (9 / 16) * window.innerWidth;
});


//=====================//
//  SCENE COMPOSITION  //
//=====================//

let mouse = new Mouse();

class MainMenu {
    constructor() {
        this.startButton = new Button("./assets/phil.png");

        this.startButtonPosition = { x: 0, y: 0 };

        this.startButton.hoverEvent = () => {
            if (this.startButtonPosition.x < 500) {
                this.startButtonPosition.x += 1;
            }
            this.startButtonPosition.y = 0;
        }
    }

    draw() {
        return [this.startButton.image, this.startButtonPosition.x, this.startButtonPosition.y, this.startButton.image.width, this.startButton.image.height];
    }

    update(deltaTime) {
        if (this.startButton.hovered(mouse) == false) {
            if (this.startButtonPosition.x > 0) {
                this.startButtonPosition.x -= 0.15 * deltaTime;
            }
            this.startButtonPosition.y = 0;
        }
        this.startButton.clicked(mouse, true);
        mouse.resetClickState();
    }
}

let mainMenu = new MainMenu()


//=============//
//  GAME LOOP  //
//=============//

const update = (delta) => {
    // philSpriteSheet.update(delta);
    mainMenu.update(delta);
}

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    // sx, sy, sw, sh: source
    // x, y, width, height: destination
    // ctx.drawImage(philSpriteSheet.image, 0, 0, philSpriteSheet.image.width, philSpriteSheet.image.height);
    ctx.drawImage(...mainMenu.draw());
}

const gameLoop = new GameLoop(update, draw);
gameLoop.start();



//============//
//  OLD CODE  //
//============//

// let mousePosition = { x: 0, y: 0 };
// canvas.addEventListener("mousemove", (event) => {
//     mousePosition.x = event.clientX;
//     mousePosition.y = event.clientY;
// });


// // let cursor = new Image();
// // cursor.src = "./assets/cursor.png";


// let playerImage = new Image();
// // playerImage.src = "./assets/phil.png";
// playerImage.src = "./assets/phil.png";

// function loop() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // ctx.drawImage(cursor, mousePosition.x - (cursor.width / 4), mousePosition.y - (cursor.height / 4), cursor.width / 2, cursor.height / 2);

//     ctx.drawImage(playerImage, 0, 0, playerImage.width, playerImage.height);
//     requestAnimationFrame(loop);
// }

// loop();
