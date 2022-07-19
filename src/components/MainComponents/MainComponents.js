import {useEffect, useReducer} from 'react'
import ToDoContainer from "./ToDo/ToDoContainer";
import {DragDropContext} from "react-beautiful-dnd"


const ACTIONS = {
    ADD_TASK: "ADD_TASK",
    SET_TASK: "SET_TASK",
    DONE_TASK: "DONE_TASK",
    DELETE_DONE_TASKS: "DELETE_DONE_TASKS",
    DELETE_INPROGRESS_TASKS: "DELETE_INPROGRESS_TASKS",
    DELETE_TODO_TASKS: "DELETE_TODO_TASKS"
}
const initialState = {
    todos: JSON.parse(localStorage.getItem("state.todos")),
    inProgress: JSON.parse(localStorage.getItem("state.inProgress")),
    done: JSON.parse(localStorage.getItem("state.done")),
}
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TASK:
            let id = Date.now() + ""
            let newTask = (task) => {
                return {task: task, id: id, completed: false, inProgress: false}
            }
            return {...state, todos: [...state.todos, newTask(action.payload.task)]};
        case ACTIONS.SET_TASK:
            return {
                ...state, todos: state.todos.map((t) => {
                    if (t.id === action.payload.id) {
                        return {...t, task: action.payload.updatedTask}
                    } else {
                        return t;
                    }
                })
            }
        case ACTIONS.DONE_TASK:
            return {
                ...state, todos: state.todos.map((t) => {
                    if (t.id === action.payload.id) {
                        return {...t, completed: true}
                    } else {
                        return t;
                    }
                })
            }
        case ACTIONS.DELETE_DONE_TASKS:
            return {
                ...state, todos: state.todos.filter((t) => !t.completed)
            }
        case ACTIONS.DELETE_TODO_TASKS:
            return {
                ...state, todos: state.todos.filter((t) => t.completed || t.inProgress)
            }
        case ACTIONS.DELETE_INPROGRESS_TASKS:
            return {
                ...state, todos: state.todos.filter((t) => !t.inProgress)
            }
        default:
            return state;
    }
}

const MainComponents = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // storing state
        localStorage.setItem("state.todos", JSON.stringify(state.todos));
    }, [state.todos]);

    const onDragEnd = (result) => {
        const {destination, source, draggableId} = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const toDoColumn = state.todos.filter(task => !task.completed && !task.inProgress);
        const newTaskIds = toDoColumn.map(task => {
            return task.id;
        });
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);


    }


    return <DragDropContext className={"app-wrapper-content"} onDragEnd={onDragEnd}>
        {[
            <ToDoContainer key={Date.now()}
                           state={state.todos}
                           dispatch={dispatch}
                           ACTIONS={ACTIONS}/>,
            /*<InProgressContainer state={state.todos}
                                 key={Date.now()}
                                 dispatch={dispatch}
                                 ACTIONS={ACTIONS}/>,
            <DoneContainer state={state.todos}
                           key={Date.now()}
                           dispatch={dispatch}
                           ACTIONS={ACTIONS}/>*/
        ]}


    </DragDropContext>
}

export default MainComponents;