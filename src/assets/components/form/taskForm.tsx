import styles from './taskForm.module.css';
import {FC, useEffect, useState} from 'react';

const TaskForm : FC<{addTask: (text: string) => void}> = ({addTask}) => {
    const [taskText, setTaskText] = useState<string>("");

    const handleSubmit = (e: any) =>{
        e.preventDefault();
        if (taskText){
            addTask(taskText);
            setTaskText("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
                <input className={styles.input} type="text" placeholder="Enter your task" value={taskText}
                onChange={(e =>{
                    setTaskText(e.target.value);
                })}/>
                <button className={styles.todoButton} type="submit">Add task</button>
            </div>
        </form>
    );
}

export default TaskForm;