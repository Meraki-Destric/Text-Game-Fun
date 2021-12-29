let movementActive = true;

function createMovementButtons() {
    let buttonContainer = $('<div class="movement"></div>')

    buttonContainer.append("<button class='up'>Up</button>")
    buttonContainer.append("<button class='right'>Right</button>")
    buttonContainer.append("<button class='down'>Down</button>")
    buttonContainer.append("<button class='left'>Left</button>")

    $("#buttonArea").append(buttonContainer)
    determineButtonValidity();
}