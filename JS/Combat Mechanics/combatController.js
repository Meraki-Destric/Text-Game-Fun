function initiateFight(enemyID) {
    // Assigns all the values for the encountered enemy
    enemy = enemies[enemyID].name;
    enemyDamage = enemies[enemyID].damage;
    enemyHealth = enemies[enemyID].health;
    enemyMaxHealth = enemies[enemyID].health;
    enemyDialogue = enemies[enemyID].dialogue;
    enemyHurtDialogue = enemies[enemyID].hurtDialogue;
    enemyDeathMessage = enemies[enemyID].deathMessage;
    enemyXP = enemies[enemyID].xp;

    // Change UI Elements here
    createCombatGrounds();
}


function combatButtonFunctionality() {

    $(".fight").on("click", () => {
        fight();

        updateHealth();

        if (enemyHealth <= 0) {
            terminateCombatButtons();
            winCondition();
            console.log("Enemy Defeated")
        } else if (health <= 0) {
            terminateBattleGrounds();
            console.log("You were defeated")
        }
    })

    $(".flee").on("click", () => {
        flee();
    })
}

function winCondition() {
    createWinButtons();
        console.log("Running");

        $(".next").on("click", () => {
            terminateBattleGrounds();
        })
}

function fight() {
    enemyHealth -= damage;
    health -= enemyDamage;

    assignCombatText();
}

function flee() {
    terminateBattleGrounds();
}

function assignCombatText() {
    let combatLog = $("#combatRecord")
    let enemyDialogueIndex = 0;

    combatLog.text(`${playerName} dealt ${damage}. ${enemy} is now at ${enemyHealth} health`)


    combatLog.append(`<p>${enemy} dealt ${enemyDamage}. You are now at ${health} health</p>`)

    // If the enemies current health is half of their max health, then they will use hurt dialogue
    if (enemyHealth > enemyMaxHealth / 2) {
        enemyDialogueIndex = Math.floor(Math.random() * enemyDialogue.length)
        combatLog.append(`<p>${enemyDialogue[enemyDialogueIndex]}</p>`)
    } else if (enemyHealth < enemyMaxHealth / 2 && enemyHealth > 0) {
        enemyDialogueIndex = Math.floor(Math.random() * enemyHurtDialogue.length)
        combatLog.append(`<p>${enemyHurtDialogue[enemyDialogueIndex]}</p>`)        
    } else {
        combatLog.append(`<p>${enemyDeathMessage}</p>`)   
    }
    
}