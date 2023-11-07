import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];



const GameBoard = (props) => {

  
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleClick(row, col) {

    

    setGameBoard((prev) => {
      const updatedBoard = [...prev.map((innerArray) => [...innerArray])];
      updatedBoard[row][col] = props.curPlayer;
      return updatedBoard;
    });

    props.onButtonClick();

  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleClick(rowIndex, colIndex)}>
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
