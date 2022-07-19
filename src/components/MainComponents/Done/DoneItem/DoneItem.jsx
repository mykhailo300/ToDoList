import s from "./DoneItem.module.css"
const DoneItem = (props) => {
    return (
        <div style={{marginBottom: "5px"}} ref={props.innerRef}>
            <span className={s.doneItem}>{props.task || null}</span>
        </div>
    )
}

export default DoneItem;