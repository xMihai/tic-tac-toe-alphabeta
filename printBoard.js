const chalk = require("chalk");

const printBoard = board => {
  console.log("- - -");
  console.log(
    ...board
      .slice(0, 3)
      .map((token, i) => (token === " " ? chalk.gray(i) : token)),
    "|"
  );
  console.log(
    ...board
      .slice(3, 6)
      .map((token, i) => (token === " " ? chalk.gray(i + 3) : token)),
    "|"
  );
  console.log(
    ...board
      .slice(6, 9)
      .map((token, i) => (token === " " ? chalk.gray(i + 6) : token)),
    "|"
  );
};

module.exports = printBoard;
