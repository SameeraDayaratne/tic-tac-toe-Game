import React, { useState } from "react";





const GameBoard = (props) => {

  
//   const [gameBoard, setGameBoard] = useState(initialGameBoard);

//   function handleClick(row, col) {

    

//     setGameBoard((prev) => {
//       const updatedBoard = [...prev.map((innerArray) => [...innerArray])];
//       updatedBoard[row][col] = props.curPlayer;
//       return updatedBoard;
//     });

//     props.onButtonClick();

//   }

  return (
    <ol id="game-board">
      {props.board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => props.onButtonClick(rowIndex, colIndex)} disabled={col != null}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
