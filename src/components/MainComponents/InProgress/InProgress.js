import "../../../styles.css"
import {Droppable} from "react-beautiful-dnd";
import {TaskList} from "../ToDo/ToDo";
import DeleteFooter from "../helperComponents/DeleteFooter";

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
            <DeleteFooter deleteFunction = {props.onClearInProgressItems}/>
        </div>
    )
}

export default InProgress;