var GameRulesFactory = require('../../core/game-rules-factory');
var GameTypes = require('../../core/game-types');

describe("Game Rules", function() {
    it("seven point rules applied when it's specified", function() {
        // arrange
        var gameRules = GameRulesFactory.generateGameRules(GameTypes.sevenPoint, false);

        // assert
        expect(gameRules.ruleName).toEqual("Seven Point");
        expect(gameRules.doCountForGame).toEqual(false);
    });

    it("four point rules applied when it's specified", function() {
        // arrange
        var gameRules = GameRulesFactory.generateGameRules(GameTypes.fourPoint, false);

        // assert
        expect(gameRules.ruleName).toEqual("Four Point");
        expect(gameRules.doCountForGame).toEqual(false);
    });
});