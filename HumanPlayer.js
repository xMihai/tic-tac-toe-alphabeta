const prompt = require("prompt");
const printBoard = require("./printBoard");

const getMove = board => {
  printBoard(board);

  return new Promise((resolve, reject) => {
    prompt.start();

    const schema = {
      properties: {
        position: {
          description: "position",
          pattern: /^[0-8]$/,
          message: "Must be a position",
          required: true
        }
      }
    };

    prompt.get(schema, (err, result) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(+result.position);
      }
    });
  });
};

module.exports = { getMove };
