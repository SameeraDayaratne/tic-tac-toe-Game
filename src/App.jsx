import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
function App() {

  const [player , setPlayer] = useState('X');
  const [turns , setTurns] = useState([]);

  function handleClick(rowIndex,colIndex){
    setPlayer(currentPlayer => currentPlayer === 'X' ? 'O' : 'X')
    
    setTurns(prevTurn => {

      let activePlayer = 'X';

      if(prevTurn.length > 0 && prevTurn[0].player === activePlayer)
      {
        activePlayer = 'O';
      }

      let updatedTurn = [{position : {row:rowIndex , col: colIndex} , player: activePlayer}, ...prevTurn];

      return updatedTurn;

    })

  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" curPlayer={player}></Player>
          <Player name="Player 2" symbol="O" curPlayer={player}></Player>
          
        </ol>
        <GameBoard curPlayer={player} onButtonClick={handleClick} turnsArr={turns}></GameBoard>
      </div>
    <Log turnsArr={turns}></Log>
    </main>
  );
}

export default App;
