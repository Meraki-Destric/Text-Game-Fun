let trackedLocation = ['row', 'col', 'direction']
let lastDirection = 'movement';

createMapTiles(5,5);
colourMap(startingTiles);
assignText();
createMovementButtons();
determineButtonValidity();
movementFunctionality();
assignEncounterableEnemies();

console.log("Start up complete")