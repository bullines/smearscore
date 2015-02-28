"use strict";

var _cardSuits = require('./card-suits');

var Game = function(gameOptions) {
    this.turns = [];
    this.team1GamePoints = 0;
    this.team2GamePoints = 0;
    this.team1Score = 0;
    this.team2Score = 0;

    this.team1 = gameOptions.team1 || 'Team 1';
    this.team2 = gameOptions.team2 || 'Team 2';
    this.gameType = gameOptions.gameType || '7';
    this.doCountForGame = gameOptions.doCountForGame || false;
};

Game.prototype.addTurn = function(turn) {
    this.turns.push(turn);

    return true;
};

module.exports = Game;