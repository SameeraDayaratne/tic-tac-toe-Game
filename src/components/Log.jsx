import React from 'react';

function Log({turnsArr}) {
    return (
        <div>
            <ol id='log'>
                 {/* {turnsArr.map((turn) =>{
                   <li>hi</li>
                 }) }              */}
                 {
                   turnsArr.map((turn) =>{
                        return <li key={`${turn.position.row}${turn.position.col}`}>{turn.player} Clicked {turn.position.row}{turn.position.col}  </li>;
                      })
                 }
            </ol>
        </div>
    );
}

export default Log;