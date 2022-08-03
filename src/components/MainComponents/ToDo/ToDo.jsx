import AddTaskForm from "./AddTaskForm";
import {Droppable} from "react-beautiful-dnd";
import styled from "styled-components"
import DeleteFooter from "../helperComponents/DeleteFooter";

export const TaskList = styled.div`
  display: inline-block;
  height: 50vh;
  width: 19.5vw;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ToDo = (props) => {
    return (
        <div className="commonComponent" style={{justifyContent: "space-between"}}>
            <div>
                <span className={"title"}>To do</span>
                <AddTaskForm dispatch={props.dispatch} ACTIONS={props.ACTIONS}/>
                <Droppable droppableId={"todos"}>
                    {provided => (
                        <TaskList ref={provided.innerRef} {...provided.droppableProps} style={{height: "45vh"}}>
                            {props.todoItems}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </div>
            <DeleteFooter deleteFunction = {props.onClearTodoItems}/>
        </div>
    )
}

export default ToDo;