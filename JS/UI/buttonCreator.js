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

function createCombatButtons() {
    let buttonContainer = $('<div class="combat"></div>')

    buttonContainer.append("<button class='fight'>Fight</button>")
    buttonContainer.append("<button class='flee'>Run</button>")

    $("#buttonArea").append(buttonContainer)    
}

function createWinButtons() {
    let buttonContainer = $("<div class='victory'></div>")

    buttonContainer.append("<button class='next'>Next</button>")

    $("#buttonArea").append(buttonContainer)   
}