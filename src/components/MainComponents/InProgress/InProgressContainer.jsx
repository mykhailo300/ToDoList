import InProgress from "./InProgress";
import {Draggable, Droppable} from "react-beautiful-dnd"
import ToDoItem from "../ToDo/ToDoItem/ToDoItem";

const InProgressContainer = (props) => {
    let progressItems = props.state.map((t, index) => {
        if (t.inProgress) {
            return <Draggable key = {t.id} draggableId = {t.id} index={index + 1}>
                {(provided) => {
                    return (
                        <ToDoItem id={t.id} key={t.id} task={t.task} complete={t.complete} dispatch={props.dispatch}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  innerRef={provided.innerRef}
                        />)
                }}
            </Draggable>
        }
        return null;
    })
    let onClearInProgressItems = () => {
        props.dispatch({
            type: props.ACTIONS.DELETE_INPROGRESS_TASKS
        })
    }
    return <Droppable droppableId={"inProgress"}>
        {(provided) => {
            return <InProgress progressItems={progressItems}
                               onClearInProgressItems={onClearInProgressItems}
                               innerRef={provided.innerRef}
                               {...provided.droppableProps}
                               {...props}
                               provided={provided}/>
        }}
    </Droppable>
}

export default InProgressContainer