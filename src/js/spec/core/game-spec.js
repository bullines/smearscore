var Game = require('../../core/game');

describe("Game", function() {
    it("new games have no hands played", function() {
        // arrange
        var gameInstance = new Game({});
        var currentGameHands = gameInstance.hands;

        // assert
        expect(currentGameHands).toEqual([]);
    });
});