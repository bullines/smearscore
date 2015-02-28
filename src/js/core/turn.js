"use strict";

var _cardSuits = require('./card-suits');

var Turn = function (suit) {
    this.trumpSuit = suit; // hearts, diamonds, clubs or spades
    this.bid = 0;
};

module.exports = Turn;