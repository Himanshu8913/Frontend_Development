import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css';

function Grid({ numberOfCards }) {
    const [turn, setTurn] = useState(true); // false -> X, true => 0

    function play() {
        console.log("move played");
        setTurn(!turn);
    }

    return (
        <>
            <h1 className="turn-highlight">Current Turn : {(turn) ? 'O' : 'X'}</h1>
            <div className="grid">
                {Array(numberOfCards).fill(<Card />).map((el, index) => {
                    return <Card key={index} onPlay={play} />
                })}
            </div>
        </>

    )
}

export default Grid;