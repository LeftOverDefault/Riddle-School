class Button extends ResponsiveImage {
    constructor(imageSrc) {
        super(imageSrc);
    }

    hovered(mousePosition) {
        let x = mousePosition.x;
        let y = mousePosition.y;

        if (x > this.image.x && x < this.image.x + this.image.width && y > this.image.y && y < this.image.y + this.image.height) {
            return true;
        }
        return false;
    }

    clicked(mousePosition) {
        if (this.hovered(mousePosition) && document) {
            this.event();
            return true;
        }
        return false;
    }

    event() {
        // ...
        console.log("Button clicked!");
    }
}
