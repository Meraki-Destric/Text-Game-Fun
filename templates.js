// Map Tiles

let exampleTiles = [{
    row: "This indicates which row this tile will be placed on",
    col: "This indicates which col this tile will be placed on",
    name: "Title of the room",
    description: "Room Description",
    exitPoint: "Present if this tile is connected to another map",
    entrancePoint: "Present if this room is the entry point from another room and may also be a second exit",
    exitDirection: "Indicates which direction the player must move in to exit the room",
    entranceDirection: "Indicates which direction the player must move in to exit the room",
}]

let exampleEnemies = [{
    name: "Name of the enemy",
    damage: "The damange they deal",
    health: "The amount of health they possess",
    dialogue: "Dialogue they exhibit randomly throughout combat",
    hurtDialogue: "Dialogue they exhibit randomly when damaged",
    xp: "XP earned from defeating these creatures",
    deathMessage: "Message that plays when they die",
    spawnLocation: "The map where this enemy would spawn"
}]