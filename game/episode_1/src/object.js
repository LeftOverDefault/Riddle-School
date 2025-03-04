class Object {
    constructor(imageSrc, x, y, width=0, height=0) {
        this.image = new Image();
        this.image.src = imageSrc;

        // Store positions & sizes as ratios of the screen size
        this.position = new Vector2(x, y);
        // this.size = Vector2(((width == 0) ? this.image.width : width), ((height == 0) ? this.image.height : height));
        this.width = ((width == 0) ? this.image.width : width);
        this.height = ((height == 0) ? this.image.height : height);
    }

    draw() {
        return [this.image, this.position.x, this.position.y, this.width, this.height];
    }

    update(deltaTime) {
        // Placeholder for movement/animation logic
    }
}
