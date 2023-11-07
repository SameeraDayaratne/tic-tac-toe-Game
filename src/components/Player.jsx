import { useState } from "react";

const Player = ({name,symbol,curPlayer,onPlayerSave}) => {

   let highlightClass = 'active';
   if(curPlayer == symbol)
   {
    highlightClass = 'active';
   }
   else{
    highlightClass = '';
   }
    
    const handleClick = () => {
        setIsEditing(editing => !editing);
    }
    
    const handleKeyPress = (event) => {
        setPlayerName(event.target.value);
        onPlayerSave(event.target.value);
    }

  const [isEditing , setIsEditing] = useState(false);
  const [playerName , setPlayerName] = useState(name);
  
  let playerNameContent = (<span className="player-name">{playerName}</span>);

  if(isEditing){
    playerNameContent = <input type="text" defaultValue={playerName} onChange={handleKeyPress} />;
  }

  return (
    <li className={highlightClass}>
      <span className="player">
        {playerNameContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button  onClick={handleClick} >{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};
export default Player;
