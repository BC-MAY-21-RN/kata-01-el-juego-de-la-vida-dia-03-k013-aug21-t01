const { LIVE, DEAD } = require("./states");
const Cell = require("./Cell");

module.exports = class Board {
  constructor(rows, colums, model) {
    this.rows = rows;
    this.colums = colums;
    this.model = model;
    this.board = null;
    this.generateBoard();
  }

  generateBoard() {
    this.board = this.model.split("\n");
    this.board = this.board.map((row) => row.split(""));
    this.board = this.board.map((row) => {
      return row.map((col) => {
        return col === DEAD ? new Cell(DEAD) : new Cell(LIVE);
      });
    });

    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        const MORE_TOP = i - 1 >= 0;
        const MORE_BUTTON = i + 1 < this.rows;
        const MORE_LEFT = j - 1 >= 0;
        const MORE_RIGHT = j + 1 < this.columns;
        const TOP = i - 1;
        const BUTTON = i + 1;
        const LEFT = j - 1;
        const RIGHT = j + 1;
        if (MORE_TOP) {
          this.board[i][j].neighbors.push(this.board[TOP][j]);
          if (MORE_LEFT) {
            this.board[i][j].neighbors.push(this.board[TOP][LEFT]);
          }
          if (MORE_RIGHT) {
            this.board[i][j].neighbors.push(this.board[TOP][RIGHT]);
          }
        }
        if (MORE_BUTTON) {
          this.board[i][j].neighbors.push(this.board[BUTTON][j]);
          if (MORE_LEFT) {
            this.board[i][j].neighbors.push(this.board[BUTTON][LEFT]);
          }
          if (MORE_RIGHT) {
            this.board[i][j].neighbors.push(this.board[BUTTON][RIGHT]);
          }
        }
        if (MORE_LEFT) {
          this.board[i][j].neighbors.push(this.board[i][LEFT]);
        }
        if (MORE_RIGHT) {
          this.board[i][j].neighbors.push(this.board[i][RIGHT]);
        }
      }
    }
  }
  generateNewGeneration() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        this.board[i][j].setNewState();
      }
    }
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        this.board[i][j].currentState = this.board[i][j].nextState;
      }
    }
  }

  printBoard() {
    let print = "";
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        print += this.board[i][j].currentState;
      }
      print += "\n";
    }
    return print;
  }
};
