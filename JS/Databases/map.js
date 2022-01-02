// Define map lists below
let state = {justStarted: true}

let startingTiles = [{
        row: 1,
        col: 5,
        name: "Tutorial Room",
        description: "Where we torture you with useless information room",
        choiceNode: [{
            // Assign the required state here
            requiredState: (state) => state.justStarted,
            // Assign name of node here
            node: tutorialChoices
        }],
        exitPoint: true,
        exitDirection: 'right',
    },
    {
        row: 2,
        col: 2,
        name: "Tutorial Room 2",
        description: "Where we leave you to suffer for all eternity"
    },
    {
        row: 2,
        col: 3,
        name: "Tutorial Room 3",
        description: "Where we leave you to suffer for all eternity"
    },
    {
        row: 2,
        col: 4,
        name: "Tutorial Room 4",
        description: "Where we leave you to suffer for all eternity"
    },
    {
        row: 2,
        col: 5,
        name: "Tutorial Room 5",
        description: "Where we leave you to suffer for all eternity",
        startingPoint: true,

    }
]

let testTiles3 = [{
    row: 1,
    col: 1,
    name: "Another Tutorial Room",
    description: "Haha, bet you thought you managed to escape the tutorial, jokes on you. You're stuck here",
    exitPoint: true,
    exitDirection: 'left',
    startingPoint: true,
},
{
    row: 2,
    col: 1,
    name: "Tutorial Hallway",
    description: "Where we leave you to suffer for all eternity"
},
{
    row: 2,
    col: 2,
    name: "Tutorial Hallway",
    description: "Where we leave you to suffer for all eternity"
},
{
    row: 2,
    col: 3,
    name: "Tutorial Hallway",
    description: "Where we leave you to suffer for all eternity"
},
{
    row: 2,
    col: 4,
    name: "The truth",
    description: "As this is a test component, there is no escape",
}
]

let testTiles2 = [{
    row: 1,
    col: 1,
    name: "Another Tutorial Room",
    description: "Haha, bet you thought you managed to escape the tutorial, jokes on you. You're stuck here",
    entrance: true,
    exitDirection: 'left',
    startingPoint: true,
},
{
    row: 2,
    col: 1,
    name: "Tutorial Hallway",
    description: "Where we leave you to suffer for all eternity"
},
{
    row: 2,
    col: 2,
    name: "Tutorial Hallway",
    description: "Where we leave you to suffer for all eternity"
},
{
    row: 2,
    col: 3,
    name: "Tutorial Hallway",
    description: "Where we leave you to suffer for all eternity"
},
{
    row: 2,
    col: 4,
    name: "The truth",
    description: "As this is a test component, there is no escape",
}
]

// Indicate map exits and entrances below

startingTiles.push({
    exit: testTiles2
});
testTiles2.push({
    entrance: startingTiles,
    exit: testTiles3
});
