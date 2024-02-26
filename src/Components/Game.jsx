import Square from "./Square.jsx";
import { useState } from "react";

export default function Game() {
    const [gameArray, setGameArray] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    function handleClick(squareNumber) {
        if (gameArray[squareNumber] || checkWinner()) {
            return; // Do nothing if the game is won or the square is already filled
        }

        const copyArray = [...gameArray];
        copyArray[squareNumber] = isXTurn ? "X" : "O";
        setGameArray(copyArray);
        setIsXTurn(!isXTurn);
    }

    function checkWinner() {
        const winnerLogics = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let logic of winnerLogics) {
            const [a, b, c] = logic;
            if (gameArray[a] && gameArray[a] === gameArray[b] && gameArray[a] === gameArray[c]) {
                return true; // Return true if a winner is found
            }
        }
        return false; // Return false if no winner is found after checking all logic sets
    }

    const isWinner = checkWinner();

    return (
        <div className="game">
            {isWinner ? <h1>Someone won</h1> : (
                <>
                    <div className="row">
                        <Square onClick={() => handleClick(0)} value={gameArray[0]} />
                        <Square onClick={() => handleClick(1)} value={gameArray[1]} />
                        <Square onClick={() => handleClick(2)} value={gameArray[2]} />
                    </div>
                    <div className="row">
                        <Square onClick={() => handleClick(3)} value={gameArray[3]} />
                        <Square onClick={() => handleClick(4)} value={gameArray[4]} />
                        <Square onClick={() => handleClick(5)} value={gameArray[5]} />
                    </div>
                    <div className="row">
                        <Square onClick={() => handleClick(6)} value={gameArray[6]} />
                        <Square onClick={() => handleClick(7)} value={gameArray[7]} />
                        <Square onClick={() => handleClick(8)} value={gameArray[8]} />
                    </div>
                </>
            )}
        </div>
    );
}
