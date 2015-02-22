var Game = require('../../core/game');

describe("Game", function() {
  var gameInstance = new Game();

  it("stating something", function() {
    var result = gameInstance.foo();
    expect(result).toEqual('foo');
  });
});