function Gameboard () {
    const rows = 3
    const columns = 3
    const board = []

    for (let i = 0; i<3; i++) {
        board[i] = [];
        for (let j = 0; j<3; j++){
            board[i].push(Cell());
        }
    }

    const getBoard = () => board;
    const dropToken (player) => {
        //Filter finds all the cells with a value of 0 and map returns them by creating a new array
        const availableCells = board.filter((row) => row[column].getValue() === 0).map(row => row[column]);
        if (!availableCells.length) return;
    }
    const printBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues);
      };
    
      return { getBoard, dropToken, printBoard };
}