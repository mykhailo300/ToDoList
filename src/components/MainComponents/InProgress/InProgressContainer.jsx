import InProgress from "./InProgress";
import DoneItem from "../Done/DoneItem/DoneItem";

const InProgressContainer = ({state, dispatch, ACTIONS}) => {
    const progressItems = state.map((t, index) => {
        return <DoneItem id={t.id} key={t.id} task={t.task}
                         dispatch={dispatch} index={index}/>

    })
    let onClearInProgressItems = () => {
        dispatch({
            type: ACTIONS.DELETE_INPROGRESS_TASKS
        })
    }
    return <InProgress progressItems={progressItems} onClearInProgressItems={onClearInProgressItems}/>

}

export default InProgressContainer