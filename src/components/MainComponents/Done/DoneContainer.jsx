import DoneItem from "./DoneItem/DoneItem";
import Done from "./Done";

const DoneContainer = ({state = [], dispatch, ACTIONS}) => {
    const doneItems = state.map((t, index) => {
        return <DoneItem id={t.id} key={t.id} task={t.task}
                      dispatch={dispatch} index={index}/>
    })
    let onClearDoneItems = () => {
        dispatch({
            type: ACTIONS.DELETE_DONE_TASKS
        })
    }
    return <Done doneItems={doneItems} onClearDoneItems = {onClearDoneItems}/>
}

export default DoneContainer