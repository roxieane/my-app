import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.todolist.completed} onChange={() => props.handleChange(props.todolist.id)} />
            <p>{props.todolist.text}</p>
        </div>
    )
}


export default TodoItem