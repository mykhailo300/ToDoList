import {useFormik} from "formik";
import "../../../styles.css"
import * as Yup from "yup";

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
        },
        validationSchema: Yup.object().shape({
            toDoTask: Yup.string().min(1).max(40, 'Must be 40 characters or less')
        })
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={"addTaskBlock"}>
                <input className={"textInput"}
                       placeholder={'Type your task here'}
                       name={"toDoTask"}
                       value={formik.values.toDoTask}
                       type="text"
                       id={'toDoTask'}
                       onBlur={formik.handleBlur}
                       onChange={formik.handleChange}/>
                {formik.touched.toDoTask && formik.errors.toDoTask ? (
                <div>{formik.errors.toDoTask}</div>
            ) : null}
                <button className={"addTaskButton"} type={'submit'}></button>
            </div>
        </form>
    )
}

export default AddTaskForm;