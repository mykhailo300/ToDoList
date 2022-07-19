import {useFormik} from "formik";
import "../../../styles.css"

const AddTaskForm = (props) => {
    const formik = useFormik({
        initialValues: {
            toDoTask: ""
        },
        onSubmit: (values) => {
            if(values.toDoTask === "") return null;
            props.dispatch({
                type: props.ACTIONS.ADD_TASK,
                payload: {task: values.toDoTask}});
            values.toDoTask = "";
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={"addTaskBlock"}>
                <input className={"textInput"}
                       placeholder={'Type your task here'}
                       name={"toDoTask"}
                       value={formik.values.toDoTask}
                       type="text"
                       onChange={formik.handleChange}/>
                <button className={"addTaskButton"}></button>
            </div>
        </form>
    )
}

export default AddTaskForm;