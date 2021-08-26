const { LIVE, DEAD } = require("./models/states");
const Board = require("./models/Board");

const rows = 4;
const columns = 8;
const modelo = "........\n....*...\n...**...\n........";

const board = new Board(rows, columns, modelo);
let table = board.printBoard();
console.log(table);
board.generateNewGeneration();
table = board.printBoard();
console.log(table);
