class Room {
    constructor(name, description, objects, characters, directions) {
        this.name = name;
        this.description = description;
        this.objects = objects;
        this.characters = characters;
        this.directions = directions;
    }

    addObject(object) {
        this.objects.push(object);
    }

    addCharacter(character) {
        this.character.push(character);
    }

    removeCharacter(character) {
        const index = this.character.indexOf(character);
        if (index > -1) {
            this.character.splice(index, 1);
        }
    }

    draw() {
        this.objects.forEach(obj => {
            obj.draw();
        });

        this.character.forEach(character => {
            character.draw();
        });
    }

    update() {
        this.character.forEach(character => {
            character.update();
        });
    }
}
