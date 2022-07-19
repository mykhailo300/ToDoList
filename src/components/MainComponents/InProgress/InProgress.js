import "../../../styles.css"

const InProgress = (props) => {
    return (
        <div className={"commonComponent"} style = {{justifyContent: "space-between"}} ref={props.innerRef}>
            <div>
                <span className={"title"}>In progress</span>
                {props.progressItems}
            </div>
            {props.provided.placeholder}
            <button onClick={props.onClearInProgressItems} className={"addTaskButton"}
                    style = {{backgroundColor: "red", width: "1.1vw", marginBottom: "2.5vh"}}></button>
        </div>
    )
}

export default InProgress;