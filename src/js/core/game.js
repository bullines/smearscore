var _cardSuits = require('./card-suits');
var _gameTypes = require('./game-types');
var _gameRulesFactory = require('./game-rules-factory');

var Game = function(gameOptions) {
    "use strict";

    this.turns = [];
    this.team1GamePoints = 0;
    this.team2GamePoints = 0;
    this.team1Score = 0;
    this.team2Score = 0;

    this.team1 = gameOptions.team1 || 'Team 1';
    this.team2 = gameOptions.team2 || 'Team 2';
    this.gameType = gameOptions.gameType || _gameTypes.sevenPoint;
    this.doCountForGame = gameOptions.doCountForGame || false;
    //this.gameRules = _gameRulesFactory.somethingSomething();
};

Game.prototype.addTurn = function(turn) {
    this.turns.push(turn);

    return true;
};

Game.prototype.getGameScore = function() {

    return true;
};

// stuff that could be private
// isGameWon
// 

module.exports = Game;