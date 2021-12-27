let trackedLocation = ['row', 'col', 'direction']
let lastDirection = 'movement';

createMapTiles(5,5);
colourMap(startingTiles);
createMovementButtons();
determineButtonValidity();

console.log("Start up complete")