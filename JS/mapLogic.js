let mapLoc = $("#mapArea");
let currentMap = [];
let gameStarted = false;


function createMapTiles(columns, rows) {
    let mapGrid = $("<div id='mapGrid'></div>")

    // Creates the rows of the map
    for (let i = 0; i < rows; i++) {
        // The classes will later be used to identify the area where the player is in and where they'll be able to move
        let row = $(`<div class='mapRow${i + 1}'></div>`)
        // Create the columns for the map
        for (let j = 0; j < columns; j++) {
            let col = $(`<div class='mapCol${j + 1} mapTile' id="inactive"></div>`)
            row.append(col);
        }
        // Sends rows to the grid
        mapGrid.append(row);
    }
    // Makes the grid visible
    mapLoc.append(mapGrid);

    console.log("Map grid completed")
}

function destroyMap() {
    $("#mapGrid").remove();
}

// Shows what tiles are available for the player to traverse
function colourMap(activeTiles) {
    currentMap = activeTiles;
    for (let i = 0; i < activeTiles.length; i++) {

        $(`.mapRow${activeTiles[i].row}`).children(`.mapCol${activeTiles[i].col}`).attr('id', 'active');

        // Assigns tile as an exitPoint
        if (activeTiles[i].exitPoint) {
            $(`.mapRow${activeTiles[i].row}`).children(`.mapCol${activeTiles[i].col}`).addClass('exit');
            if (activeTiles[i].exitDirection === 'up') {
                $(`.mapRow${activeTiles[i].row}`).children(`.mapCol${activeTiles[i].col}`).addClass('upExit');
            }
            if (activeTiles[i].exitDirection === 'right') {
                $(`.mapRow${activeTiles[i].row}`).children(`.mapCol${activeTiles[i].col}`).addClass('rightExit');
            }
            if (activeTiles[i].exitDirection === 'left') {
                $(`.mapRow${activeTiles[i].row}`).children(`.mapCol${activeTiles[i].col}`).addClass('leftExit');
            }
            if (activeTiles[i].exitDirection === 'down') {
                $(`.mapRow${activeTiles[i].row}`).children(`.mapCol${activeTiles[i].col}`).addClass('downExit');
            }
        }
        // Assigns tile as an entry point
        if (activeTiles[i].entrance) {
            $(`.mapRow${activeTiles[i].row}`).children(`.mapCol${activeTiles[i].col}`).addClass('entrance');
            if (activeTiles[i].exitDirection === 'up') {
                $(`.mapRow${activeTiles[i].row}`).children(`.mapCol${activeTiles[i].col}`).addClass('upEntrance');
            }
            if (activeTiles[i].exitDirection === 'right') {
                $(`.mapRow${activeTiles[i].row}`).children(`.mapCol${activeTiles[i].col}`).addClass('rightEntrance');
            }
            if (activeTiles[i].exitDirection === 'left') {
                $(`.mapRow${activeTiles[i].row}`).children(`.mapCol${activeTiles[i].col}`).addClass('leftEntrance');
            }
            if (activeTiles[i].exitDirection === 'down') {
                $(`.mapRow${activeTiles[i].row}`).children(`.mapCol${activeTiles[i].col}`).addClass('downEntrance');
            }
        }
        if (activeTiles[i].startingPoint && !gameStarted) {
            $(`.mapRow${activeTiles[i].row}`).children(`.mapCol${activeTiles[i].col}`).attr('id', 'occupied');
        }
    }

    // Only does this if the player has started the game, as otherwise this would cause errors
    // Assigns which tile will be occupied based on where the player was on the previous map
    if (gameStarted) {
        console.log(`Tracked Location is ${trackedLocation}`);
        if (trackedLocation[2] === 'up') {
            // Grabs the last row of the next map
            let row = parseInt(findTileLocation($('#map-grid').children().last().attr('class')))
            // Ensures that the tile is valid before changing it
            if ($(`.mapRow${row}`).children(`.mapCol${trackedLocation[1]}`).attr('id') === 'active') {
                $(`.mapRow${row}`).children(`.mapCol${trackedLocation[1]}`).attr('id', 'occupied');
            } else {
                // Error Message
                console.log(`Tile invalid. Please review map ${currentMap}`)
            }
        } else if (trackedLocation[2] === 'down') {
            // Grabs the first row of the next map
            let row = parseInt(findTileLocation($('#map-grid').children().first().attr('class')))
            // Ensures that the tile is valid before changing it
            if ($(`.mapRow${row}`).children(`.mapCol${trackedLocation[1]}`).attr('id') === 'active') {
                $(`.mapRow${row}`).children(`.mapCol${trackedLocation[1]}`).attr('id', 'occupied');
            } else {
                // Error Message
                console.log(`Tile invalid. Please review map ${currentMap}`)
            }

        } else if (trackedLocation[2] === 'right') {
            // Grabs the first column on the next map
            let col = parseInt(findTileLocation($(`.mapRow${trackedLocation[0]}`).children().first().attr('class')))
            // Ensures that the tile is valid before changing it
            if ($(`.mapRow${trackedLocation[0]}`).children(`.mapCol${col}`).attr('id') === 'active') {
                $(`.mapRow${trackedLocation[0]}`).children(`.mapCol${col}`).attr('id', 'occupied');
            } else {
                // Error Message
                console.log(`Tile invalid. Please review map ${currentMap}`)
            }

        } else if (trackedLocation[2] === 'left') {
            // Grabs the first column on the next map
            let col = parseInt(findTileLocation($(`.mapRow${trackedLocation[0]}`).children().last().attr('class')))
            // Ensures that the tile is valid before changing it
            if ($(`.mapRow${trackedLocation[0]}`).children(`.mapCol${col}`).attr('id') === 'active') {
                $(`.mapRow${trackedLocation[0]}`).children(`.mapCol${col}`).attr('id', 'occupied');
            } else {
                // Error Message
                console.log(`Tile invalid. Please review map ${currentMap}`)
            }
        }
    }

    gameStarted = true
}