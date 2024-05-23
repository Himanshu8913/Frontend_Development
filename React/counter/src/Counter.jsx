import React, { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    function incrButtonHandler(){
        setCount(count + 1);
    }
    function decrButtonHandler(){
        setCount(count - 1);
    }
    return (
        <div>
            <span>{count}</span>
            <button onClick={incrButtonHandler}>Increment</button>
            <button onClick={decrButtonHandler}>Decrement</button>
        </div>
    )
}