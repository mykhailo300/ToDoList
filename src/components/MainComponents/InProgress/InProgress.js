import "../../../styles.css"
import {Droppable} from "react-beautiful-dnd";
import {TaskList} from "../ToDo/ToDo";

const InProgress = (props) => {
    return (
        <div className="commonComponent" style={{justifyContent: "space-between"}}>
            <div>
                <span className={"title"}>In progress</span>
                <Droppable droppableId={"inProgress"}>
                    {provided => (
                        <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                            {props.progressItems}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </div>
            <button onClick={props.onClearInProgressItems} className={"addTaskButton"}
                    style={{backgroundColor: "red", width: "1.1vw", marginBottom: "2.5vh"}}></button>
        </div>
    )
}

export default InProgress;