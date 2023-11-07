import React from 'react';

function GameOver(props) {
    return (
        <div id='game-over'>
            <h2>Game Over</h2>
            {props.gameState == 'win'? <p>{props.player} Won</p> : <p>It is a draw</p>}
            
            <button onClick={props.onRematchClick}>Rematch</button>
        </div>
    );
}

export default GameOver;