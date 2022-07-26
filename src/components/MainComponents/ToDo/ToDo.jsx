import AddTaskForm from "./AddTaskForm";
import {Droppable} from "react-beautiful-dnd";
import styled from "styled-components"

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
            <button onClick={props.onClearTodoItems} className={"addTaskButton"}
                    style={{backgroundColor: "red", width: "1.1vw", marginBottom: "2.5vh"}}></button>
        </div>
    )
}

export default ToDo;