import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {

  const [player , setPlayer] = useState('X');

  function handleClick(){
    setPlayer(currentPlayer => currentPlayer === 'X' ? 'O' : 'X')
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" curPlayer={player}></Player>
          <Player name="Player 2" symbol="O" curPlayer={player}></Player>
          
        </ol>
        <GameBoard curPlayer={player} onButtonClick={handleClick}></GameBoard>
      </div>
    </main>
  );
}

export default App;
