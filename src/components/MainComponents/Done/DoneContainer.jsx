import DoneItem from "./DoneItem/DoneItem";
import Done from "./Done";
import {Draggable, Droppable} from "react-beautiful-dnd"

const DoneContainer = (props) => {
    let doneItems = props.state.map((t, index) => {
        if (t.completed) {
            debugger;
            return <Draggable key = {t.id} draggableId = {t.id} index={index + 1}>
                {(provided) => {
                    return (
                        <DoneItem id={t.id} key={t.id} task={t.task} complete={t.complete} dispatch={props.dispatch}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  innerRef={provided.innerRef}
                        />)
                }}
            </Draggable>}
        return null
    })
    let onClearDoneItems = () => {
        props.dispatch({
            type: props.ACTIONS.DELETE_DONE_TASKS
        })
    }
    return <Droppable droppableId = {"done"}>
        {(provided) => {
            return <Done {...props}
                         doneItems={doneItems}
                         onClearDoneItems={onClearDoneItems}
                         innerRef={provided.innerRef}
                         {...provided.droppableProps}
                         provided={provided}/>
        }}
    </Droppable>
}

export default DoneContainer