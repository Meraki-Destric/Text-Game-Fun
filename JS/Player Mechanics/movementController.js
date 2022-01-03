function movementFunctionality() {
    if (movementActive) {
        $(".up").on('click', () => {
            let occupiedTile = $("#occupied")
            // Tracked info used to decide where the player will appear on the map when new maps are generated
            lastDirection = 'up';
            trackOccupiedTile()
            // Find current row
            let occupiedRow = findTileLocation(occupiedTile.parent().attr('class'))
            // Find current column
            let occupiedColumn = findTileLocation(occupiedTile.attr('class'))
            if (onExitTile()) {
                // Exits tile
                exitMap('exit', 'up');
            }
            if (onEntranceTile()) {
                exitMap('entrance', 'up');
            }
            // Check if upper tile is active
            if (checkValidMovement(occupiedRow, occupiedColumn, 'up')) {
                moveCharacter(occupiedRow, occupiedColumn, 'up')
                console.log("Movement Successful");
                determineButtonValidity();
                encounterEnemy();
            } else {
                console.log("Movement Invalid")
            }

        })
        $(".right").on('click', () => {
            let occupiedTile = $("#occupied")
            lastDirection = 'right';
            trackOccupiedTile()
            // Find current row
            let occupiedRow = findTileLocation(occupiedTile.parent().attr('class'))
            // Find current column
            let occupiedColumn = findTileLocation(occupiedTile.attr('class'))

            // Checks if the player is current on an exit tile
            if (onExitTile()) {
                // Exits tile
                exitMap('exit', 'right');
            }
            if (onEntranceTile()) {
                exitMap('entrance', 'right');
            }
            // Check if right tile is active
            if (checkValidMovement(occupiedRow, occupiedColumn, 'right')) {
                moveCharacter(occupiedRow, occupiedColumn, 'right')
                console.log("Movement Successful");
                determineButtonValidity();
                encounterEnemy();
            } else {
                console.log("Movement Invalid")
            }

        })
        $(".down").on('click', () => {
            let occupiedTile = $("#occupied")
            lastDirection = 'down';
            trackOccupiedTile()
            // Find current row
            let occupiedRow = findTileLocation(occupiedTile.parent().attr('class'))
            // Find current column
            let occupiedColumn = findTileLocation(occupiedTile.attr('class'))

            // Checks if the player is current on an exit tile
            if (onExitTile()) {
                // Exits tile
                exitMap('exit', 'down');
            }
            if (onEntranceTile()) {
                exitMap('entrance', 'down');
            }
            // Check if bottom tile is active
            if (checkValidMovement(occupiedRow, occupiedColumn, 'down')) {
                moveCharacter(occupiedRow, occupiedColumn, 'down')
                console.log("Movement Successful");
                determineButtonValidity();
                encounterEnemy();
            } else {
                console.log("Movement Invalid")
            }

        })
        $(".left").on('click', () => {
            let occupiedTile = $("#occupied")
            lastDirection = 'left';
            trackOccupiedTile()
            // Find current row
            let occupiedRow = findTileLocation(occupiedTile.parent().attr('class'))
            // Find current column
            let occupiedColumn = findTileLocation(occupiedTile.attr('class'))

            // Checks if the player is current on an exit tile
            if (onExitTile()) {
                // Exits tile
                exitMap('exit', 'left');
            }
            if (onEntranceTile()) {
                exitMap('entrance', 'left');
            }
            // Check if left tile is active
            if (checkValidMovement(occupiedRow, occupiedColumn, 'left')) {
                moveCharacter(occupiedRow, occupiedColumn, 'left')
                console.log("Movement Successful");
                determineButtonValidity();
                encounterEnemy();
            } else {
                console.log("Movement Invalid")
            }
        })
    }
}

// If a movement is valid, the buttons will show, otherwise they'll be invisible
function determineButtonValidity() {
    if (movementActive) {

        $(".up").attr("id", "invisible")
        $(".down").attr("id", "invisible")
        $(".left").attr("id", "invisible")
        $(".right").attr("id", "invisible")


        let occupiedTile = $("#occupied")
        // Find current row
        let occupiedRow = findTileLocation(occupiedTile.parent().attr('class'))
        // Find current column
        let occupiedColumn = findTileLocation(occupiedTile.attr('class'))
        if (checkValidMovement(occupiedRow, occupiedColumn, 'up')) {
            $(".up").attr("id", "visible")
        }
        if (checkValidMovement(occupiedRow, occupiedColumn, 'down')) {
            $(".down").attr("id", "visible")
        }
        if (checkValidMovement(occupiedRow, occupiedColumn, 'right')) {
            $(".right").attr("id", "visible")
        }
        if (checkValidMovement(occupiedRow, occupiedColumn, 'left')) {
            $(".left").attr("id", "visible")
        }
        // If the player is on an exit tile, this handles whether the buttons appear or not
        if (onExitTile()) {
            if (checkExitPointMovementValidity("up")) {
                $(".up").attr("id", "visible")
            }
            if (checkExitPointMovementValidity("down")) {
                $(".down").attr("id", "visible")
            }
            if (checkExitPointMovementValidity("right")) {
                $(".right").attr("id", "visible")
            }
            if (checkExitPointMovementValidity("left")) {
                $(".left").attr("id", "visible")
            }
        }
        // If the player is on an entrance tile, this handles whether the buttons appear or not
        if (onEntranceTile()) {
            if (checkEntrancePointMovementValidity("up")) {
                $(".up").attr("id", "visible")
            }
            if (checkEntrancePointMovementValidity("down")) {
                $(".down").attr("id", "visible")
            }
            if (checkEntrancePointMovementValidity("right")) {
                $(".right").attr("id", "visible")
            }
            if (checkEntrancePointMovementValidity("left")) {
                $(".left").attr("id", "visible")
            }
        }
    }
}

function checkExitPointMovementValidity(direction) {
    let occupiedTile = $("#occupied")
    // Find current row
    let occupiedRow = findTileLocation(occupiedTile.parent().attr('class'))
    // Find current column
    let occupiedColumn = findTileLocation(occupiedTile.attr('class'))

    for (let i = 0; i < currentMap.length; i++) {
        // Checks if the occupied tile is an exit
        if (currentMap[i].row === parseInt(occupiedRow) && currentMap[i].col === parseInt(occupiedColumn) && $(`.mapCol${occupiedColumn}`).hasClass(`${direction}Exit`)) {
            return true
        } else {
            return false;
        }
    }
}

function checkEntrancePointMovementValidity(direction) {
    let occupiedTile = $("#occupied")
    // Find current row
    let occupiedRow = findTileLocation(occupiedTile.parent().attr('class'))
    // Find current column
    let occupiedColumn = findTileLocation(occupiedTile.attr('class'))

    for (let i = 0; i < currentMap.length; i++) {
        // Checks if the occupied tile is an entrance
        if (currentMap[i].row === parseInt(occupiedRow) && currentMap[i].col === parseInt(occupiedColumn) && $(`.mapCol${occupiedColumn}`).hasClass(`${direction}Entrance`)) {
            return true
        } else {
            return false;
        }
    }
}

function findTileLocation(string) {
    var regex = /\d+/g;
    return string.match(regex);
}

// Make another function just to check for valid movement
function checkValidMovement(row, column, direction) {
    if (direction === 'up') {
        let nextRow = parseInt(row) - 1;
        // Checks if the row is valid
        if ($(`.mapRow${nextRow}`) !== undefined) {
            if ($(`.mapRow${nextRow}`).children(`.mapCol${column}`).attr('id') === 'active') {
                return true
            } else {
                return false
            }
        }
    } else if (direction === 'right') {
        let nextCol = parseInt(column) + 1;
        // Checks if the row is valid
        if ($(`.mapCol${nextCol}`) !== undefined) {
            if ($(`.mapRow${row}`).children(`.mapCol${nextCol}`).attr('id') === 'active') {
                return true
            } else {
                return false
            }
        }
    } else if (direction === 'left') {
        let nextCol = parseInt(column) - 1;
        // Checks if the row is valid
        if ($(`.mapCol${nextCol}`) !== undefined) {
            if ($(`.mapRow${row}`).children(`.mapCol${nextCol}`).attr('id') === 'active') {
                return true
            } else {
                return false
            }
        }

    } else if (direction === "down") {
        let nextRow = parseInt(row) + 1;
        // Checks if the row is valid
        if ($(`.mapRow${nextRow}`) !== undefined) {
            if ($(`.mapRow${nextRow}`).children(`.mapCol${column}`).attr('id') === 'active') {
                return true
            } else {
                return false
            }
        }

    } else {
        console.log("Please input a direction");
    }
}

function detectChoiceNode(row, column, tileMapName) {
    let tileIndex = 0;
    let choiceNodeIndex = 0;

    // Starts looking for the tile index that matches the given row and column values
    // Else if statement ensures that if no match is found, the program won't continue
    for (let i = 0; i < tileMapName.length; i++) {
        console.log(`Tilemap row is ${tileMapName[i].row} and row is ${row}`)
        console.log(`Tilemap column is ${tileMapName[i].col} and column is ${column}`)
        if (tileMapName[i].row == row && tileMapName[i].col == column) {
            tileIndex = i;
            break;
        } else if (i === tileMapName.length - 1) {
            console.log("No Match Found")
            return;
        }
    }

    // Ensures that this doesn't run unless there is a choiceNode to begin with
    if (tileMapName[tileIndex].choiceNode !== undefined) {
        // Finds which choice node is currently active
        for (let i = 0; i < tileMapName[tileIndex].choiceNode.length; i++) {
            if (tileMapName[tileIndex].choiceNode[i].requiredState) {
                choiceNodeIndex = i;
                break;
            }
        }

        console.log(`Current state of required state is ${tileMapName[tileIndex].choiceNode[choiceNodeIndex].requiredState}`)

        // Prevents errors by ensuring that the tile index and choice node are valid
        if (requiredStateConditions(tileMapName, tileIndex, choiceNodeIndex)) {
            // If valid, starts up the choice node
            showChoiceNode(0, tileMapName[tileIndex].choiceNode[choiceNodeIndex].node)
        }
    }
}

function requiredStateConditions(tileMap, tileIndex, choiceNodeIndex) {
    // Checks that the current state matches up with the required state
    // If it does, then it gets passed through
    return tileMap[tileIndex].choiceNode[choiceNodeIndex].requiredState(state)
}

function moveCharacter(row, column, direction) {
    if (direction === 'up') {
        let nextRow = parseInt(row) - 1;
        // Checks if the row is valid
        if ($(`.mapRow${nextRow}`) !== undefined) {
            if ($(`.mapRow${nextRow}`).children(`.mapCol${column}`).attr('id') === 'active') {
                // Moves the character
                $(`.mapRow${nextRow}`).children(`.mapCol${column}`).attr('id', 'occupied')
                $(`.mapRow${row}`).children(`.mapCol${column}`).attr('id', 'active')
                console.log(`Character moved ${direction}`)

                // Adds in the title for the area and a description
                assignText();

                // Checks if there's a choice node
                detectChoiceNode(nextRow, column, currentMap)
            } else {
                return false
            }
        }
    } else if (direction === 'right') {
        let nextCol = parseInt(column) + 1;
        // Checks if the row is valid
        if ($(`.mapCol${nextCol}`) !== undefined) {
            if ($(`.mapRow${row}`).children(`.mapCol${nextCol}`).attr('id') === 'active') {
                // Moves the character
                $(`.mapRow${row}`).children(`.mapCol${nextCol}`).attr('id', 'occupied')
                $(`.mapRow${row}`).children(`.mapCol${column}`).attr('id', 'active')
                console.log(`Character moved ${direction}`)

                // Adds in the title for the area and a description
                assignText();

                // Checks if there's a choice node
                detectChoiceNode(nextCol, column, currentMap)
            } else {
                return false
            }
        }
    } else if (direction === 'left') {
        let nextCol = parseInt(column) - 1;
        // Checks if the row is valid
        if ($(`.mapCol${nextCol}`) !== undefined) {
            if ($(`.mapRow${row}`).children(`.mapCol${nextCol}`).attr('id') === 'active') {
                // Moves the character
                $(`.mapRow${row}`).children(`.mapCol${nextCol}`).attr('id', 'occupied')
                $(`.mapRow${row}`).children(`.mapCol${column}`).attr('id', 'active')
                console.log(`Character moved ${direction}`)

                // Adds in the title for the area and a description
                assignText();

                // Checks if there's a choice node
                detectChoiceNode(nextCol, column, currentMap)
            } else {
                return false
            }
        }

    } else if (direction === "down") {
        let nextRow = parseInt(row) + 1;
        // Checks if the row is valid
        if ($(`.mapRow${nextRow}`) !== undefined) {
            if ($(`.mapRow${nextRow}`).children(`.mapCol${column}`).attr('id') === 'active') {
                // Moves the character
                $(`.mapRow${nextRow}`).children(`.mapCol${column}`).attr('id', 'occupied')
                $(`.mapRow${row}`).children(`.mapCol${column}`).attr('id', 'active')
                console.log(`Character moved ${direction}`)


                // Adds in the title for the area and a description
                assignText();
                
                // Checks if there's a choice node
                detectChoiceNode(nextRow, column, currentMap)
            } else {
                return false
            }
        }

    } else {
        console.log("Please input a direction");
    }
}

function onExitTile() {
    let occupiedTile = $("#occupied")
    // Find current row
    let occupiedRow = findTileLocation(occupiedTile.parent().attr('class'))
    // Find current column
    let occupiedColumn = findTileLocation(occupiedTile.attr('class'))

    for (let i = 0; i < currentMap.length; i++) {
        // Checks if the occupied tile is an exit
        if (currentMap[i].row === parseInt(occupiedRow) && currentMap[i].col === parseInt(occupiedColumn) && currentMap[i].exitPoint === true) {
            return true
        } else {
            return false;
        }
    }
}

function onEntranceTile() {
    let occupiedTile = $("#occupied")
    // Find current row
    let occupiedRow = findTileLocation(occupiedTile.parent().attr('class'))
    // Find current column
    let occupiedColumn = findTileLocation(occupiedTile.attr('class'))

    for (let i = 0; i < currentMap.length; i++) {
        // Checks if the occupied tile is an exit
        if (currentMap[i].row === parseInt(occupiedRow) && currentMap[i].col === parseInt(occupiedColumn) && currentMap[i].entrance === true) {
            return true
        } else {
            return false;
        }
    }
}

function exitMap(method, direction) {
    let occupiedTile = $("#occupied")
    // Find current row
    let occupiedRow = findTileLocation(occupiedTile.parent().attr('class'))
    // Find current column
    let occupiedColumn = findTileLocation(occupiedTile.attr('class'))

    for (let i = 0; i < currentMap.length; i++) {
        if (currentMap[i].row === parseInt(occupiedRow) && currentMap[i].col === parseInt(occupiedColumn)) {
            // Checks if the player is travelling in the exit direction
            if (currentMap[i].exitDirection === direction && method === 'exit') {
                nextMap('exit')
            } else if (currentMap[i].exitDirection === direction && method === 'entrance') {
                nextMap('entrance')
            } else {
                return console.log("No exit here");
            }
        }
    }
}

function nextMap(direction) {
    if (direction === 'exit') {
        destroyMap();
        createMapTiles(5, 5);
        colourMap(currentMap[currentMap.length - 1].exit);
        assignText();
        determineButtonValidity();
    } else {
        destroyMap();
        createMapTiles(5, 5);
        colourMap(currentMap[currentMap.length - 1].entrance);
        assignText();
        determineButtonValidity();
    }
}

function trackOccupiedTile() {
    let occupiedTile = $("#occupied")
    // Find current row
    let occupiedRow = findTileLocation(occupiedTile.parent().attr('class'))
    // Find current column
    let occupiedColumn = findTileLocation(occupiedTile.attr('class'))
    if (gameStarted) {
        trackedLocation = [parseInt(occupiedRow), parseInt(occupiedColumn), lastDirection]
    }
}