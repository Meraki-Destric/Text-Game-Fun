let state = {}

// Sets up the text for the 
function assignChoiceText(choiceNodes, id) {
    areaName.text(choiceNodes[id].title)
    textArea.text(choiceNodes[id].text)
}

function terminateChoice() {
    $("#choiceButtons").remove();
    createMovementButtons();
    determineButtonValidity();
    assignText();
}

function showOption(option) {
    // Determines whether the option is allowed to go through.
    // Option will be denied if the player doesn't possess the required states
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    // Grabs the ID of the following text
    const nextNodeID = option.nextText
    // If the ID is lower than 0, then it terminates it
    if (nextNodeID < 0) {
        return terminateChoice();
    }
    // Makes changes to state if any exist
    state = Object.assign(state, option.setState)
    // Begins the next choice area
    showChoiceNode(nextNodeID);
}

// Removes the movement buttons and instantiates 
function showChoiceNode(choiceNodeIndex, choiceNode) {
    const node = choiceNode.find(choiceNode => choiceNode.id === choiceNodeIndex)
    terminateChoice();
    let choiceBox = $("<div id='choiceButtons'>")

    node.options.forEach(option => {
        if (showOption(option)) {
            // Creates a button and assigns functionality
            let button = $(`<button></button`)
            button.text(option.text)
            button.on("click", () => selectOption(option))
            choiceBox.append(button);
        }
    })

    assignChoiceText(choiceNode, choiceNodeIndex);
    terminateMovementButtons();
    $("#buttonArea").append(choiceBox);
}
