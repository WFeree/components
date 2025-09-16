import { useEffect, useState } from "react";

function ToDoList(){
    const [todos, setTodos] = useState<string[]>(["Alma", "Körte"])
    const [text, setText] = useState("Szilva")

    const addToTodos = () => {
        setTodos(prev => [text, ...prev])
        setText("")
    }

    // useEffect(()=>{
    //     console.log(text);
    // },[text])

    const removeFromTodo = (removeable: string) => {
        setTodos(prev => prev.filter(e => e !== removeable))
    }

    return(
        <>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={addToTodos}>+</button>
            <ul>
                { todos.map(todo => <li>{todo} <button onClick={()=>removeFromTodo(todo)}>X</button></li> )}
            </ul>
        </>
    )
}
export default ToDoList;