var Game = require('../../core/game');
var CardSuits = require('../../core/card-suits');
var Turn = require('../../core/turn');

describe("Game", function() {
    it("new games have no turns played", function() {
        // arrange
        var gameInstance = new Game({});
        var currentGameTurns = gameInstance.turns;

        // assert
        expect(currentGameTurns).toEqual([]);
    });

    it ("adding turns to Game increases turn count", function () {
        // arrange
        var gameInstance = new Game({});
        var aTurn = new Turn(CardSuits.hearts);
        gameInstance.addTurn(aTurn);

        // assert
        expect(gameInstance.turns.length).toEqual(1);
    });
});