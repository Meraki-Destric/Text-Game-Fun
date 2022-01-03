let enemy = "";
let enemyHealth = 0;
let enemyMaxHealth = 0;
let enemyDamage = 0;
let enemyDialogue = [];
let enemyHurtDialogue = [];
let enemyDeathMessage = "";
let enemyXP = 0;

let enemies = [{
    name: "Wolf",
    damage: 2,
    health: 20,
    dialogue: ["Awoooo", "Awoo", "Awo"],
    hurtDialogue: ["Wooo", "wooo", "woo..."],
    deathMessage: "wuu....",
    xp: 5,
    spawnLocation: startingTiles
},{
    name: "Doggo",
    damage: 2,
    health: 5,
    dialogue: ["Awoooo", "Awoo", "Awo"],
    hurtDialogue: ["Wooo", "wooo", "woo..."],
    deathMessage: "wowuu....",
    xp: 5,
    spawnLocation: startingTiles
}]