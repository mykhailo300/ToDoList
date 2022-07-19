import "../../../styles.css"
const Done = (props) => {
    return (
        <div className="commonComponent" style = {{justifyContent: "space-between"}} ref={props.innerRef}>
            <div>
                <span className={"title"}>Done</span>
                {props.doneItems}
            </div>
            {props.provided.placeholder}
            <button onClick={props.onClearDoneItems} className={"addTaskButton"}
                                       style = {{backgroundColor: "red", width: "1.1vw", marginBottom: "2.5vh"}}></button>
        </div>
    )
}

export default Done;