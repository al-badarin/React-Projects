import { useState } from 'react';

import './Player.css';

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing); // this way we are always working with the latest available state
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
