class Object {
    constructor(imageSrc, name, x, y, width = 0, height = 0) {
        this.image = new Image();
        this.image.src = imageSrc;

        this.name = name;

        // Store positions & sizes as ratios of the screen size
        this.position = new Vector2(x, y);
        this.size = new Vector2(((width == 0) ? this.image.width : width), ((height == 0) ? this.image.height : height));
    }

    draw() {
        return [this.image, this.position.x, this.position.y, this.size.x, this.size.y];
    }

    update(deltaTime) {
        // Placeholder for movement/animation logic
    }
}
