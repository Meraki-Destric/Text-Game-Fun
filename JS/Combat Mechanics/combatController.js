let enemy;

function initiateFight(enemyID) {
    enemy = enemies[enemyID];

    // Change UI Elements here
}


function combatButtonFunctionality() {
    $(".fight").on("click", () => {
        fight();
    })

    $(".flee").on("click", () => {
        flee();
    })
}

function fight() {

}

function flee() {

}