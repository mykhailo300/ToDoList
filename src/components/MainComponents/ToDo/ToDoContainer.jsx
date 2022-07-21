import ToDoItem from "./ToDoItem/ToDoItem";
import ToDo from "./ToDo";

const ToDoContainer = ({state, ...props}) => {
    const todoItems = state.map((t, index) => {
        return <ToDoItem id={t.id} key={t.id} task={t.task}
                         dispatch={props.dispatch} index={index}/>
    })
    let onClearTodoItems = () => {
        props.dispatch({
            type: props.ACTIONS.DELETE_TODO_TASKS
        })
    }
    return <ToDo {...props} todoItems={todoItems} onClearTodoItems={onClearTodoItems}/>

}

export default ToDoContainer