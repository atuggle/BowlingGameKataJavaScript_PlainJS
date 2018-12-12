const myGame = require('./game')

function bowlMany(game, throws, pins) {
    for (let i=0; i<throws; i++) {
        game.bowl(pins)
    }
}

function CanCreateGameTest() {
    let theGame = new myGame()
    if (theGame) {
        console.log("CanCreateGameTest = Passed!")
    } else {
        throw new Exception("CanCreateGameTest - FAILED!!!")
    }
}
CanCreateGameTest();

function CanCreateBowlGutterGameTest() {
    let theGame = new myGame()
    bowlMany(theGame, 20, 0)

    if (theGame.score() === 0) {
        console.log("CanCreateBowlGutterGameTest = Passed!")
    } else {
        throw new Exception("CanCreateBowlGutterGameTest - FAILED!!!")
    }
}
CanCreateBowlGutterGameTest();

function CanCreateBowlAllOnesTest() {
    let theGame = new myGame()
    bowlMany(theGame, 20, 1)

    if (theGame.score() === 20) {
        console.log("CanCreateBowlAllOnesTest = Passed!")
    } else {
        throw new Exception("CanCreateBowlAllOnesTest - FAILED!!!")
    }
}
CanCreateBowlAllOnesTest();

function CanCreateBowlAllSpareTest() {
    let theGame = new myGame()
    theGame.bowl(5)
    theGame.bowl(5)
    bowlMany(theGame, 18, 1)

    if (theGame.score() === 29) {
        console.log("CanCreateBowlAllSpareTest = Passed!")
    } else {
        throw new Exception("CanCreateBowlAllSpareTest - FAILED!!!")
    }
}
CanCreateBowlAllSpareTest();

function CanCreateBowlAllStrikeTest() {
    let theGame = new myGame()
    theGame.bowl(10)
    bowlMany(theGame, 18, 1)

    if (theGame.score() === 30) {
        console.log("CanCreateBowlAllStrikeTest = Passed!")
    } else {
        throw new Exception("CanCreateBowlAllStrikeTest - FAILED!!!")
    }
}
CanCreateBowlAllStrikeTest();

function CanCreateBowlPerfectGameTest() {
    let theGame = new myGame()
    bowlMany(theGame, 12, 10)

    let score = theGame.score()
    if (score === 300) {
        console.log("CanCreateBowlPerfectGameTest = Passed!")
    } else {
        throw new Exception("CanCreateBowlPerfectGameTest - FAILED!!!")
    }
}
CanCreateBowlPerfectGameTest();
