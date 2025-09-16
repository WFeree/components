import { useState } from "react";

function ToDoList(){
    const [todos, setTodos] = useState<string[]>(["Alma", "Körte"])
    const [text, setText] = useState("Szilva")

    const addToTodos = () => {
        setTodos(prev => [text, ...prev])
        setText("")
    }

    return(
        <>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={addToTodos}>+</button>
            <ul>
                { todos.map(todo => <li>{todo}</li>)}
            </ul>
        </>
    )
}
export default ToDoList;