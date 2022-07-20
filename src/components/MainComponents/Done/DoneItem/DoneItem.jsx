import s from "./DoneItem.module.css"
import PortalReactDOM from "react-dom";
import {Draggable} from "react-beautiful-dnd";
import React from "react";
import {Container} from "../../ToDo/ToDoItem/ToDoItem";
const DoneItem = (props) => {
    return (
        <Draggable draggableId = {props.id} index = {props.index}
                   disableInteractiveElementBlocking className = {"draggable"} key = {props.id}>
            {(provided, snapshot) => {
                const child = (<Container {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          ref={provided.innerRef}>
                    <span className={s.doneItem}>{props.task || null}</span>
                </Container>)

                if(!snapshot.isDragging) return child;

                return PortalReactDOM.createPortal(child, document.getElementById("root"));
            }}
        </Draggable>
    )
}

export default DoneItem;