const gameLoop = new GameLoop(document.getElementById("gameCanvas"));

const map = {
    "hallway_1": {
        name: "Hallway 1",
        description: "A long hallway with a door at the end.",
        objects: [
            {
                name: "Door",
                description: "A wooden door with a brass handle.",
                x: 100, y: 100,
                width: 100, height: 200,
                sprite: ""
            }
        ],
        characters: [],
        directions: {
            north: ".",
            south: "",
            east: "hallway_2",
            west: "."
        }
    },
    "hallway_2": {
        name: "Hallway 2",
        description: "A long hallway with a door at the end.",
        objects: [],
        characters: [],
        directions: {
            north: ".",
            south: "",
            east: ".",
            west: "hallway_1"
        }
    }
}

function loadObject(object) {
    gameLoop.room.addObject(new Object(object.sprite, object.name, object.x, object.y, object.width, object.height));
}

function loadRoom(room) {
    objects = new Array();
    map[room].objects.forEach(object => {
        objects.push(new Object(object.sprite, object.name, object.x, object.y, object.width, object.height));
    });
    characters = [];
    // map[room].characters.foreach(() => {
    //     characters.push(new Character(object.sprites, object.name, object.x, object.y, object.width, object.height));
    // });
    gameLoop.rooms[room] = new Room(map[room].name, map[room].description, objects, characters, map[room].directions);
}

loadRoom("hallway_1");
loadRoom("hallway_2");

gameLoop.start();
