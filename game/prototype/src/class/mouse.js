class Mouse {
    constructor() {
        this.leftMouseDown = false;
        this.rightMouseDown = false;
        this.middleMouseDown = false;
        this.leftClicked = false; // New flag for single-click detection
        this.position = { x: 0, y: 0 };

        // Bind event listeners
        document.addEventListener("mousemove", this.handleMouseMove.bind(this));
        document.addEventListener("mousedown", this.handleMouseDown.bind(this));
        document.addEventListener("mouseup", this.handleMouseUp.bind(this));
        document.addEventListener("contextmenu", (event) => event.preventDefault());
    }

    handleMouseMove(event) {
        this.position.x = event.clientX;
        this.position.y = event.clientY;
    }

    handleMouseDown(event) {
        if (event.button === 0) {
            if (!this.leftMouseDown) {
                this.leftClicked = true; // Detect first press
            }
            this.leftMouseDown = true;
        } else if (event.button === 1) {
            this.middleMouseDown = true;
        } else if (event.button === 2) {
            this.rightMouseDown = true;
        }
    }

    handleMouseUp(event) {
        if (event.button === 0) {
            this.leftMouseDown = false;
            this.leftClicked = false; // Reset click state on release
        } else if (event.button === 1) {
            this.middleMouseDown = false;
        } else if (event.button === 2) {
            this.rightMouseDown = false;
        }
    }

    resetClickState() {
        this.leftClicked = false; // Call this at the end of the frame to reset click
    }

    // constructor() {
    //     this.leftMouseDown = false;
    //     this.rightMouseDown = false;
    //     this.middleMouseDown = false;
    //     this.position = { x: 0, y: 0 };

    //     // Bind event listeners
    //     document.addEventListener("mousemove", this.handleMouseMove.bind(this));
    //     document.addEventListener("mousedown", this.handleMouseDown.bind(this));
    //     document.addEventListener("mouseup", this.handleMouseUp.bind(this));
    //     document.addEventListener("contextmenu", (event) => event.preventDefault());
    // }

    // handleMouseMove(event) {
    //     this.position.x = event.clientX;
    //     this.position.y = event.clientY;
    // }

    // handleMouseDown(event) {
    //     switch (event.button) {
    //         case 0:
    //             this.leftMouseDown = true;
    //             break;
    //         case 1:
    //             this.middleMouseDown = true;
    //             break;
    //         case 2:
    //             this.rightMouseDown = true;
    //             break;
    //     }
    // }

    // handleMouseUp(event) {
    //     switch (event.button) {
    //         case 0:
    //             this.leftMouseDown = false;
    //             break;
    //         case 1:
    //             this.middleMouseDown = false;
    //             break;
    //         case 2:
    //             this.rightMouseDown = false;
    //             break;
    //     }
    // }
}
