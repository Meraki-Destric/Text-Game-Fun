let encounterableEnemies = []

function assignEncounterableEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        if (enemies[i].spawnLocation === currentMap) {
            encounterableEnemies.push(enemies[i]);
        }
    }
}

function encounterEnemy() {
    // If encounter index is higher than encounter target, the player will encounter an enemy
    let encounterTarget = 8;
    let encounterIndex = Math.floor(Math.random() * 10);

    if (encounterIndex >= encounterTarget) {
        let encounteredEnemy = Math.floor(Math.random() * encounterableEnemies.length)
        initiateFight(encounteredEnemy);
    }
}