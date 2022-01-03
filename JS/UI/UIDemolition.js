function terminateTextArea() {
    $("#text").remove();
    $("#title").remove();
}

function terminateChoice() {
    $("#choiceButtons").remove();
    createMovementButtons();
    determineButtonValidity();
    movementFunctionality();
    assignText();
}

function terminateMovementButtons() {
    $(".movement").remove();
}

function terminateBattleGrounds() {
    $("#combatGround").remove();
    terminateCombatButtons();
    terminateWinButtons();
    createTextArea();
    createMovementButtons();
    determineButtonValidity();
    movementFunctionality();
    assignText();
}

function terminateCombatButtons() {
    $(".combat").remove()
}

function terminateWinButtons() {
    $(".victory").remove();
}