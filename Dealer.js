const printBoard = require("./printBoard");

const getEmptyBoard = () => new Array(9).fill(" ");

const getWinner = board => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  if (lines.some(line => line.every(position => board[position] === "X")))
    return "X";

  if (lines.some(line => line.every(position => board[position] === "O")))
    return "O";

  return " ";
};

const runGame = async (getMoveA, getMoveB) => {
  const players =
    Math.random() > 0.5 ? [getMoveA, getMoveB] : [getMoveB, getMoveA];

  const tokens = ["X", "O"];

  let board = getEmptyBoard();
  let winner = " ";

  do {
    const move = await players[0](board);
    board = board.map((token, i) => (i === move ? tokens[0] : token));
    winner = getWinner(board);

    players.push(players.shift());
    tokens.push(tokens.shift());
  } while (winner === " ");

  printBoard(board);
  console.log(winner, "wins");
};

module.exports = { runGame };
