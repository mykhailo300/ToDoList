import ToDoItem from "./ToDoItem/ToDoItem";
import ToDo from "./ToDo";

const ToDoContainer = (props) => {
    const todoItems = props.state.map((t, index) => {
        if (!t.completed && !t.inProgress) {
            return <ToDoItem id={t.id} key={t.id} task={t.task} complete={t.complete}
                             dispatch={props.dispatch} index = {index}/>
        }
        return null
    })
    let onClearTodoItems = () => {
        props.dispatch({
            type: props.ACTIONS.DELETE_TODO_TASKS
        })
    }
    return <ToDo {...props} todoItems={todoItems} onClearTodoItems={onClearTodoItems}/>

}

export default ToDoContainer