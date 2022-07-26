import "../../../styles.css"
import {Droppable} from "react-beautiful-dnd";
import {TaskList} from "../ToDo/ToDo";

const Done = (props) => {
    return (
        <div className="commonComponent" style={{justifyContent: "space-between"}}>
            <div>
                <span className={"title"}>Done</span>
                <Droppable droppableId={"done"}>
                    {provided => (
                        <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                            {props.doneItems}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </div>
            <button onClick={props.onClearDoneItems} className={"addTaskButton"}
                    style={{backgroundColor: "red", width: "1.1vw", marginBottom: "2.5vh"}}></button>
        </div>
    )
}


export default Done;