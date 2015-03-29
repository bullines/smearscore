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

    it ("adding a turn with values should have actual values", function () {
        // arrange
        var gameInstance = new Game({});
        var aTurn = new Turn(CardSuits.hearts);
        aTurn.bidScore = 4;
        aTurn.bidTeam = 'Team 1';
        gameInstance.addTurn(aTurn);

        // assert
        expect(gameInstance.turns[0].bidScore).toEqual(4);
        expect(gameInstance.turns[0].bidTeam).toEqual('Team 1');
    });
});