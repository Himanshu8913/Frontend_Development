import { useState } from "react";
import ToDoList from "./ToDoList";

export default function ToDoApp() {
    const [ todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    return (
        <div>
            <input type="text" placeholder="add new todo" 
            onChange={(e) => setNewTodo(e.target.value)} /> <br />

            <button onClick={() => setTodos([...todos, newTodo])} >Add</button>
            <br />
            <ToDoList todos={todos} />
        </div>
    )
}