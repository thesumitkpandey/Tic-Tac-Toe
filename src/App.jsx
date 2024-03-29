import Player from "./Components/Player.jsx";
import logo from "../public/logo.jpg";
import Game from "./Components/Game.jsx";

export default function App(){
    return (
        <div className="container">
            <img src={logo} className="logo" alt="logo"/>
            <div className="players-section">
                    <Player initialPlayerName="Player X"/>
                    <Player initialPlayerName="Player O"/>
            </div>
            <Game/>
        </div>
    )
}