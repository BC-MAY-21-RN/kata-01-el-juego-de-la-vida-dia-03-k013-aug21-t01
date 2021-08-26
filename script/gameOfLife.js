var firstGeneration = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "*", "*", ".", ".", "."],
    [".", ".", ".", "*", "*", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ];
var secondGeneration = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
];

class Board {
    constructor(firstGeneration, secondGeneration) {
      this.firstGeneration = firstGeneration;
      this.secondGeneration = secondGeneration;
    }

    printGrid() {
        console.log("firstGeneration");
        firstGeneration.forEach((row) => {
            console.log(row.join(" "));
          });
        console.log("secondGeneration");
        secondGeneration.forEach((row) => {
            console.log(row.join(" "));
        });
    }

    NextGeneration(){
        firstGeneration.forEach((row, indexr) => {
            row.forEach((colums, indexc) => {
                check(indexr,indexc);
            });
        });

        function check(rows,column){
            if(firstGeneration[rows][column]==='.' && countNeightbours(rows,column)===3){
                secondGeneration[rows][column] = "*";
            } else if(firstGeneration[rows][column]==='*' && (countNeightbours(rows,column)<2 || countNeightbours(rows,column)>3)){
                secondGeneration[rows][column] = "."
            } else {
                firstGeneration[rows][column] = secondGeneration[rows][column];
            }
        }

        function countNeightbours(rows, column){
            let tell = 0;
            if (firstGeneration[rows][column]==='.'){
                if(firstGeneration[rows][column-1]==='*'){
                    tell = tell+1;
                }
                if(firstGeneration[rows][column+1]==='*'){
                    tell = tell+1;
                }
                if(firstGeneration[rows-1][column]==='*'){
                    tell = tell+1;
                }
                if(firstGeneration[rows+1][column]==='*'){
                    tell = tell+1;
                }
                if(firstGeneration[rows+1][column-1]==='*'){
                    tell = tell+1;
                }
                if(firstGeneration[rows+1][column+1]==='*'){
                    tell = tell+1;
                }
                if(firstGeneration[rows-1][column-1]==='*'){
                    tell = tell+1;
                }
                if(firstGeneration[rows-1][column+1]==='*'){
                    tell = tell+1;
                }
                return tell;
            } else{
                if(firstGeneration[rows][column-1]==='.'){
                    tell = tell+1;
                }
                if(firstGeneration[rows][column+1]==='.'){
                    tell = tell+1;
                }
                if(firstGeneration[rows-1][column]==='.'){
                    tell = tell+1;
                }
                if(firstGeneration[rows+1][column]==='.'){
                    tell = tell+1;
                }
                if(firstGeneration[rows+1][column-1]==='.'){
                    tell = tell+1;
                }
                if(firstGeneration[rows+1][column+1]==='.'){
                    tell = tell+1;
                }
                if(firstGeneration[rows-1][column-1]==='.'){
                    tell = tell+1;
                }
                if(firstGeneration[rows-1][column+1]==='.'){
                    tell = tell+1;
                }
                return tell;
            }
            
        }
    }
    
}

console.log("Aqui inicia");
let board = new Board(firstGeneration,secondGeneration);
board.printGrid();
console.log("Pruebas");
board.NextGeneration();

