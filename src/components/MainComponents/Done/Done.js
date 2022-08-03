import "../../../styles.css"
import {Droppable} from "react-beautiful-dnd";
import {TaskList} from "../ToDo/ToDo";
import DeleteFooter from "../helperComponents/DeleteFooter";

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
            <DeleteFooter deleteFunction = {props.onClearDoneItems}/>
        </div>
    )
}


export default Done;