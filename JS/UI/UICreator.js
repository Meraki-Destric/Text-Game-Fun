function createTextArea() {
    let center = $("#textArea")
    let title = $("<div id='title'></div>")
    let text = $("<div id='text'></div>")

    center.append(title);
    center.append(text);
}

function createCombatGrounds() {
    let combatGrounds = $("<div id='combatGround'></div>")

    combatGrounds.append($("<div id='combatRecord'></div>"))

    // Builds up combat log area
    terminateTextArea();
    $("#textArea").append(combatGrounds);

    // Creates the buttons for combat and assigns functionality
    terminateMovementButtons();
    createCombatButtons();
    combatButtonFunctionality();
}