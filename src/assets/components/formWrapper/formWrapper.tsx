import TaskForm from "../form/taskForm.tsx";
import {useState} from "react";
import Task from "../task/task.tsx";
import styles from './formWrapper.module.css'
import {TaskModel} from "../task/TaskModel.tsx";

const FormWrapper = () => {
    const [tasks, setTasks] = useState<TaskModel[]>([]);
    const [id, setId] = useState<number>(0);

    const addTask = (text: string) =>{
        let task = new TaskModel();
        task.id = id;
        task.text = text;
        setTasks([...tasks, task]);
        setId(id + 1);
    }

    const deleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id != id));
    }

    return (
        <div className={styles.todoList}>
            <h1 className={styles.aboveText}>What are your tasks for today?</h1>
            <div className={styles.formWrapper}>
                <TaskForm addTask={addTask}/>
                {tasks.map((task, index) => (
                    <Task key={index} task={task} deleteTask={deleteTask}/>
                ))}
            </div>
        </div>
    );
}

export default FormWrapper;