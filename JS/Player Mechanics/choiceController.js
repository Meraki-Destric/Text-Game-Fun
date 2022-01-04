// Sets up the text for the 
function assignChoiceText(choiceNodes, id) {
    let areaName = $("#title")
    let textArea = $("#text")
    areaName.text(choiceNodes[id].title)
    textArea.text(choiceNodes[id].text)
}

function showOption(option) {
    // Determines whether the option is allowed to go through.
    // Option will be denied if the player doesn't possess the required states
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option, choiceNode) {
    // Grabs the ID of the following text
    const nextNodeID = option.nextText

    // Makes changes to state if any exist
    state = Object.assign(state, option.setState)
    
    // If the ID is lower than 0, then it terminates it
    if (nextNodeID < 0) {
        return terminateChoice();
    }
    // Begins the next choice area
    showChoiceNode(nextNodeID, choiceNode);
}

// Removes the movement buttons and instantiates 
function showChoiceNode(choiceNodeIndex, choiceNode) {
    currentlyChatting = true;
    const node = choiceNode.find(choiceNode => choiceNode.id === choiceNodeIndex)
    terminateChoice();
    let choiceBox = $("<div id='choiceButtons'></div>")

    node.options.forEach(option => {
        if (showOption(option)) {
            // Creates a button and assigns functionality
            let button = $(`<button></button`)
            button.text(option.text)
            button.on("click", () => selectOption(option, choiceNode))
            choiceBox.append(button);
        }
    })

    assignChoiceText(choiceNode, choiceNodeIndex);
    terminateMovementButtons();
    $("#buttonArea").append(choiceBox);
}
