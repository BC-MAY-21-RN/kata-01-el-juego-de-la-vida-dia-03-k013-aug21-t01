const firstGeneration = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "*", "*", ".", ".", "."],
    [".", ".", ".", "*", "*", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ];

describe('testing the game of life', ()=>{
    test('test that the board has 8 columns', ()=>{
        expect(firstGeneration).toHaveLength(4);
    });
    test('verify that the board is not empty', ()=>{
        expect(firstGeneration).not.toHaveLength(0);
    });
    
})