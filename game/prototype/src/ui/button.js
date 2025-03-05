class Button extends ResponsiveImage {
    constructor(imageSrc) {
        super(imageSrc);
    }

    hovered(mouse) {
        let { x, y } = mouse.position;

        if (
            x > this.image.x &&
            x < this.image.x + this.image.width &&
            y > this.image.y &&
            y < this.image.y + this.image.height
        ) {
            this.hoverEvent();

            return true;
        } else {
            return false;
        }


    }

    clicked(mouse, singleClick = false) {
        if (this.hovered(mouse)) {
            if (singleClick && mouse.leftClicked) {
                this.clickEvent();
                return true;
            } else if (!singleClick && mouse.leftMouseDown) {
                this.clickEvent();
                return true;
            }
        }
        return false;
    }

    clickEvent() {
        console.log("Button clicked!");
    }

    hoverEvent() {
        console.log("Button hovered!");
    }

    // hovered(mouse) {
    //     let x = mouse.position.x;
    //     let y = mouse.position.y;

    //     if (x > this.image.x && x < this.image.x + this.image.width && y > this.image.y && y < this.image.y + this.image.height) {
    //         return true;
    //     }
    //     return false;
    // }

    // clicked(mouse) {
    //     if (this.hovered(mouse) && mouse.leftMouseDown) {
    //         this.event();
    //         return true;
    //     }
    //     return false;
    // }

    // event() {
    //     // ...
    //     console.log("Button clicked!");
    // }
}
