import {FC} from 'react';
import styles from './task.module.css'
import {FaPen, FaTrash} from 'react-icons/fa'
import {TaskModel} from "./TaskModel.tsx";

const Task : FC<{task: TaskModel/*, deleteTask: (id: number) => any*/}> = ({task/*, deleteTask*/}) => {
    return (
        <div className={styles.task}>
            {task.text}
            <div className={styles.icons}>
                <FaPen/>
                <FaTrash /*onClick={deleteTask(task.id)}*//>
            </div>
        </div>
    );
}

export default Task;