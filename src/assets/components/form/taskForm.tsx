import React from 'react';
import styles from './taskForm.module.css';
import Task from "../task/task.tsx";

function TaskForm(props) {
    return (
        <form className={styles.todoForm}>
            <div className={styles.inputWrapper}>
                <input className={styles.input} type="text" placeholder="Enter your task"/>
                <button className={styles.todoButton} type="submit">Add task</button>
            </div>
            <Task task={"постричься"}/>
            <Task task={"постричься"}/>
        </form>
    );
}

export default TaskForm;