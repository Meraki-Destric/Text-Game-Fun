let enemy = "";
let enemyHealth = 0;
let enemyMaxHealth = 0;
let enemyDamage = 0;
let enemyDialogue = [];
let enemyHurtDialogue = [];
let enemyDeathMessage = "";
let enemyIntroMessage = "";
let enemyXP = 0;

let enemies = [{
    name: "Wolf",
    damage: 2,
    health: 20,
    dialogue: ["Awoooo", "Awoo", "Awo"],
    hurtDialogue: ["Wooo", "wooo", "woo..."],
    deathMessage: "wuu....",
    startingMessage: '"Grrrrr....", the wolf growls as it circles around you. Carefully assessing you as it prepares for its hunt',
    xp: 5,
    spawnLocation: startingTiles
},{
    name: "Doggo",
    damage: 2,
    health: 5,
    dialogue: ["Awoooo", "Awoo", "Awo"],
    hurtDialogue: ["Wooo", "wooo", "woo..."],
    deathMessage: "wowuu....",
    startingMessage: '"Woof", the guard dog barks at you as you enter its territory. Perhaps you should leave it be and leave?',
    xp: 5,
    spawnLocation: startingTiles
}]