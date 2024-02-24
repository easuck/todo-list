import {FC, useState} from 'react';
import {TaskModel} from "../task/TaskModel.tsx";
import styles from "./taskForm.module.css";

const EditForm : FC<{editTask: (text: string, id: number) => any, task: TaskModel}> =
    ({editTask, task}) => {
    const [taskText, setTaskText] = useState<string>(task.text);

    const handleSubmit = (e: any) =>{
        e.preventDefault();
        if (taskText){
            editTask(taskText, task.id);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
                <input className={styles.input} type="text" placeholder="" value={taskText}
                       onChange={(e) => {
                           setTaskText(e.target.value);
                       }}/>
                <button className={styles.todoButton} type="submit">Save</button>
            </div>
        </form>
    );
};

export default EditForm;