import TaskForm from "../form/taskForm.tsx";
import {useState} from "react";
import Task from "../task/task.tsx";
import styles from './formWrapper.module.css'

const FormWrapper = () => {
    const [tasks, setTasks] = useState<string[]>([]);

    const addTask = (task: string) =>{
        setTasks([...tasks, task])
    }

    return (
        <div className={styles.formWrapper}>
            <TaskForm addTask={addTask}/>
            {tasks.map((text, index) =>(
                <Task task={text} key={index}/>
            ))}
        </div>
    );
}

export default FormWrapper;