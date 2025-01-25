import {useState} from "react";

export default function Player({initialName,symbol}) {

    const [isEditing, setEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleButtonClick() {
       setEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li>
            <span className="player">
                {
                   isEditing ?
                       <input type="text" required value={playerName} onChange={handleChange}/>
                       :
                       <span className="player-name">{playerName}</span>
                }
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleButtonClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}