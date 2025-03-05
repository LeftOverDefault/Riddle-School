class ResponsiveImage {
    constructor(imageSrc) {
        this.image = new Image();
        this.image.src = imageSrc;
        // this.image.width = this.image.width;
        // this.image.height = this.image.height;

        this.aspectRatio = this.image.width / this.image.height;
    }

    resize(newWidth=null, newHeight=null) {
        if (newWidth && newHeight) {
            this.image.width = newWidth;
            this.image.height = newHeight;
        } else if (newWidth) {
            this.image.width = newWidth;
            this.image.height = newWidth / this.aspectRatio;
        } else if (newHeight) {
            this.image.height = newHeight;
            this.image.width = newHeight * this.aspectRatio;
        }
    }

    render() {
        return this.image;
    }

    update(deltaTime) {
        this.resize(this.image.width, this.image.height);
    }
}
