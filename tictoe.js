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
    const dropToken (row,column,player) => {
        //Filter finds all the cells with a value of 0 and map returns them by creating a new array
        const availableCells = board.filter((row) => row[column].getValue() === 0).map(row => row[column]);
        if (!availableCells.length) return;
        board[row][column].addToken(player);
    }
    const printBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues);
      };
    
      return { getBoard, dropToken, printBoard };
}
function Cell() {
    let value = 0;
  
    // Accept a player's token to change the value of the cell
    const addToken = (player) => {
      value = player;
    };
    const getValue = () => value;
    return (addToken, getValue())
}
function Gamecontroller ( playerOneName = "Player One",
    playerTwoName = "Player Two"
  ) {
    const players = [
        {
          name: playerOneName,
          token: 1
        },
        {
          name: playerTwoName,
          token: 2
        }
      ];
    let activePlayer = players[0]
    function switchPlayerTurn() {
        if (activePlayer === players[0]) {
          activePlayer = players[1];
        } else {
          activePlayer = players[0];
        }
      }
      const getActivePlayer = () => activePlayer;
      const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
      };
      const playRound = (row, column) => {
        // Drop a token for the current player
        console.log(
          `Dropping ${getActivePlayer().name}'s token into column ${row[column]}...`
        );
        board.dropToken(row,column, getActivePlayer().token);
        switchPlayerTurn();
        printNewRound();
    }
    printNewRound();
    return {
        playRound,
        getActivePlayer
      };
}
const game = GameController();