import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import {WINNING_COMBINATIONS} from "./winning-combinations.js"
import GameOver from "./components/GameOver";


let playerX;
let playerO;
function deriveActivePlayer(gameTurns)
{
  let activePlayer = 'X';

      if(gameTurns.length > 0 && gameTurns[0].player === activePlayer)
      {
        activePlayer = 'O';
      }

      return activePlayer

}

function setPlayerX(name){
  playerX = name;
  console.log('playerXis ' + playerX);
}

function setPlayerO(name){
  playerO = name;
  console.log('playerOis ' + playerO);
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function App() {

  // const [player , setPlayer] = useState('X');
  const [turns , setTurns] = useState([]);

  let gameBoard = [...initialGameBoard.map(innerArr => [...innerArr])];

  for(const turn of turns )
  {
    let row = turn.position.row;
    let col = turn.position.col;
    
    gameBoard[row][col] = turn.player;

  }

  let winner;

  for(let combination of WINNING_COMBINATIONS)
  {
    const firstCell = gameBoard[combination[0].row][combination[0].column];
    const secondCell = gameBoard[combination[1].row][combination[1].column];
    const thirdCell = gameBoard[combination[2].row][combination[2].column];

    if(firstCell && firstCell === secondCell && firstCell === thirdCell)
    {
      winner = firstCell;
    }
  }

  let player = deriveActivePlayer(turns);

  
  function handleClick(rowIndex,colIndex){
    // setPlayer(currentPlayer => currentPlayer === 'X' ? 'O' : 'X')
    
    setTurns(prevTurn => {

      const activePlayer = deriveActivePlayer(prevTurn);

      let updatedTurn = [{position : {row:rowIndex , col: colIndex} , player: activePlayer}, ...prevTurn];

      return updatedTurn;

    })

  }

  function handleRematch(){
    setTurns([]);   
  }

let isDraw = turns.length === 9 && !winner;

  return (
    <main>
      <div id="game-container">
      {(winner||isDraw) && <GameOver player={winner == 'X' ? playerX : playerO} gameState={winner?'win':'draw'} onRematchClick={handleRematch}></GameOver>}
        
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" curPlayer={player} onPlayerSave={setPlayerX}></Player>
          <Player name="Player 2" symbol="O" curPlayer={player} onPlayerSave={setPlayerO}></Player>
          
        </ol>
        
        <GameBoard curPlayer={player} onButtonClick={handleClick} board={gameBoard} ></GameBoard>
      </div>
    <Log turnsArr={turns}></Log>
    </main>
  );
}

export default App;
