import React, {Component} from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"


class App extends Component {
    constructor() {
        super()
        this.state = {todo: todosData}
    
    this.handleChange = this.handleChange.bind(this)
    
    }

    handleChange(id) {
        console.log("Change", id)
    }

    render() {
        
        const itemschool = this.state.todo.map(item => <TodoItem key={item.id} todolist={item} handleChange={this.handleChange} />)
        
        return(
            <div className="todo-list">
                {itemschool}
            </div>
        )
    }



}



export default App