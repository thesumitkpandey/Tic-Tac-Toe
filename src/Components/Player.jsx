import React, { useState } from "react";

export default function Player({ initialPlayerName, symbol }) {
    const [playerName, setPlayerName] = useState(initialPlayerName);
    const [btnName, setBtnName] = useState("Edit");

    function handleNameChange(e) {
        setPlayerName(e.target.value);
    }

    function handleNameEdit() {
        if (btnName == "Edit") {
            setBtnName("Save");
        } else {
            setBtnName("Edit");
        }
    }

    return (
        <div className="players">
            <input
                className="player-name"
                type="text"
                value={playerName}
                onChange={handleNameChange}
                readOnly={btnName === "Edit"}
            />
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleNameEdit}>{btnName}</button>
        </div>
    );
}
