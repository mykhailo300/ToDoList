import {useEffect, useReducer} from 'react'
import ToDoContainer from "./ToDo/ToDoContainer";
import {DragDropContext} from "react-beautiful-dnd"
import InProgressContainer from "./InProgress/InProgressContainer";
import DoneContainer from "./Done/DoneContainer";
import saveDataAfterDragging from "../../helpers/saveDataAfterDragging";
import deleteItemAfterDragging from "../../helpers/deleteItemAfterDragging";
import localStorageHelper from "../../helpers/localStorageHelper";


const ACTIONS = {
    ADD_TASK: "ADD_TASK",
    SET_TASK: "SET_TASK",
    DONE_TASK: "DONE_TASK",
    DELETE_DONE_TASKS: "DELETE_DONE_TASKS",
    DELETE_INPROGRESS_TASKS: "DELETE_INPROGRESS_TASKS",
    DELETE_TODO_TASKS: "DELETE_TODO_TASKS",
    SET_TODO_ORDER: "SET_TODO_ORDER",
    SET_INPROGRESS_ORDER: "SET_INPROGRESS_ORDER",
    SET_DONE_ORDER: "SET_DONE_ORDER",
    DELETE_TASK_AFTER_DRAGGING: "DELETE_TASK_AFTER_DRAGGING"
}
const initialState = {
    todos: JSON.parse(localStorage.getItem("state.todos")),
    inProgress: JSON.parse(localStorage.getItem("state.inProgress")),
    done: JSON.parse(localStorage.getItem("state.done")),
}
const reducer = (state, action) => {
    const newTask = (task, id) => {
        return {task: task, id: id}
    }
    switch (action.type) {
        case ACTIONS.ADD_TASK:
            let id = Date.now() + "";
            return {...state, todos: [...state.todos, newTask(action.payload.task, id)]};
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
            const removedItems = state.todos.splice(action.payload.index, 1);
            return {...state, todos: state.todos.filter((t) => !(removedItems[0].id === t.id)) ,done: [...state.done, newTask(removedItems[0].task, Date.now() + "")]}
        case ACTIONS.DELETE_DONE_TASKS:
           return {
               ...state, done: []
           }
        case ACTIONS.DELETE_TODO_TASKS:
            return {
                ...state, todos: []
            }
        case ACTIONS.DELETE_INPROGRESS_TASKS:
            return {
                ...state, inProgress: []
            }
        case ACTIONS.SET_TODO_ORDER: {
            return saveDataAfterDragging(action, state, "todos");
        }
        case ACTIONS.SET_INPROGRESS_ORDER: {
            return saveDataAfterDragging(action, state, "inProgress")
        }
        case ACTIONS.SET_DONE_ORDER: {
            return saveDataAfterDragging(action, state, "done")
        }
        case ACTIONS.DELETE_TASK_AFTER_DRAGGING: {
            return deleteItemAfterDragging(action, state)
        }
        default:
            return state;
    }
}

const MainComponents = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorageHelper(state,'todos')
    }, [state.todos]);

    useEffect(() => {
        localStorageHelper(state,'inProgress')
    }, [state.inProgress]);

    useEffect(() => {
        // storing state
        localStorageHelper(state,'done')
    }, [state.done]);

    const onDragEnd = (result) => {
        const {destination, source} = result;
        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        if (destination.droppableId === "todos") {
            dispatch({
                type: ACTIONS.SET_TODO_ORDER,
                payload: result
            });
        } else if (destination.droppableId === "inProgress") {
            dispatch({
                type: ACTIONS.SET_INPROGRESS_ORDER,
                payload: result
            });
        } else if (destination.droppableId === "done") {
            dispatch({
                type: ACTIONS.SET_DONE_ORDER,
                payload: result
            });
        } else if (destination.droppableId === "delete") {
            dispatch({
                type: ACTIONS.DELETE_TASK_AFTER_DRAGGING,
                payload: result
            });
        }
    }
    if(state.todos === null || state.inProgress === null || state.done === null) return <div style={{textAlign: "center"}}>
        <h1>I hope you will like my application!</h1>
        <h2>Reload the page to continue</h2>
    </div>
    return <DragDropContext onDragEnd={onDragEnd}>
        <div className={"app-wrapper-content"}>
            <ToDoContainer key={1}
                           state={state.todos}
                           dispatch={dispatch}
                           ACTIONS={ACTIONS}/>
            <InProgressContainer state={state.inProgress}
                                 key={2}
                                 dispatch={dispatch}
                                 ACTIONS={ACTIONS}/>
            <DoneContainer state={state.done}
                           key={3}
                           dispatch={dispatch}
                           ACTIONS={ACTIONS}/>
        </div>
    </DragDropContext>
}

export default MainComponents;