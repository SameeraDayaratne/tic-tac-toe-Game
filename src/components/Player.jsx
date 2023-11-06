import { useState } from "react";

const Player = ({name,symbol}) => {

   
    
    const handleClick = () => {
        setIsEditing(editing => !isEditing);
    }
    
    const handleKeyPress = (event) => {
        setPlayerName(event.target.value);
        
    }

  const [isEditing , setIsEditing] = useState(false);
  const [playerName , setPlayerName] = useState(name);
  
  let playerNameContent = (<span className="player-name">{playerName}</span>);

  if(isEditing){
    playerNameContent = <input type="text" defaultValue={playerName} onChange={handleKeyPress} />;
  }

  return (
    <li>
      <span className="player">
        {playerNameContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button  onClick={handleClick} >{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};
export default Player;
