// Removes the movement buttons and instantiates 
function initiateChoice(choiceNodes) {
    let choiceBox = $("<div id='choiceButtons'>")
}

function terminateChoice() {
    $("#choiceButtons").remove();
    createMovementButtons();
    determineButtonValidity();
    assignText();
}