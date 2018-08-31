const { runGame } = require("./Dealer");
const { getMove } = require("./HumanPlayer");

console.log(runGame(getMove, getMove));
