import TaskForm from "../form/taskForm.tsx";
import {useState} from "react";
import Task from "../task/task.tsx";
import EditForm from "../form/editForm.tsx"
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

    const editTaskForm = (id: number) => {
        setTasks(tasks.map(task => task.id == id ?
            {...task, isEditing: !task.isEditing} : task));
    }

    const editTask = (taskText: string, id: number) => {
        setTasks(tasks.map(task => task.id  == id ?
            {...task, text: taskText, isEditing: !task.isEditing} : task));
    }


    return (
        <div className={styles.todoList}>
            <h1 className={styles.aboveText}>What are your tasks for today?</h1>
            <div className={styles.formWrapper}>
                <TaskForm addTask={addTask}/>
                {tasks.map((task, index) => (
                    task.isEditing ? (
                        <EditForm key={index} editTask={editTask} task={task} /*тут рагалось на то, что каждому элементу списка
                        нужен ключ. почему тогда не ругается на taskForm?*/ />
                        ) : (
                        <Task key={index} task={task} deleteTask={deleteTask} editTaskForm={editTaskForm}/>
                    )
                ))}
            </div>
        </div>
    );
}

export default FormWrapper;