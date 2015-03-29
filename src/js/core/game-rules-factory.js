var GameRulesFactory = function () {
    "use strict";

    var _gameTypes = require('./game-types');
    var _fourPointRules = require('./game-rules/four-point-rules');
    var _sevenPointRules = require('./game-rules/seven-point-rules');
    
    var _generateGameRules = function (gameType, doCountForGame) {
        var RuleEngine;

        switch (gameType) {
            case _gameTypes.sevenPoint:
                RuleEngine = _sevenPointRules;
                break;
            case _gameTypes.fourPoint:
                RuleEngine = _fourPointRules;
                break;
        }

        return new RuleEngine(doCountForGame);
    };

    return {
        generateGameRules: _generateGameRules
    };
}();

module.exports = GameRulesFactory;