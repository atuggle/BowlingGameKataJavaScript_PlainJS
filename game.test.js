const myGame = require('./game')

function CanCreateGameTest() {
    let theGame = new myGame()
    if (theGame) {
        console.log("Passed!")
    } else {
        throw new Exception("CanCreateGameTest - FAILED!!!")
    }
}

CanCreateGameTest();

