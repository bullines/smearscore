var _cardSuits = require('./card-suits');

var Turn = function (suit, bidTeam, bidScore) {
    this.trumpSuit = suit; // hearts, diamonds, clubs or spades

    this.bidScore = bidScore;
    this.bidTeam = bidTeam;
};

Turn.prototype = function () {
    "use strict";

    var _team1GamePoints, _team2GamePoints;

    var _setGamePoints = function(team1GamePoints, team2GamePoints) {
        _team1GamePoints = team1GamePoints;
        _team2GamePoints = team2GamePoints;
    };

    var _applyGamePointsToScore = function () {
        // TODO
    };

    return {
        setGamePoints: _setGamePoints,
        team1GamePoints: function () { return _team1GamePoints; },
        team2GamePoints: function () { return _team2GamePoints; }
    };
}();

module.exports = Turn;