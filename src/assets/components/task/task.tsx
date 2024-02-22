import {FC} from 'react';
import styles from './task.module.css'
import {FaPen, FaTrash} from 'react-icons/fa'

const Task : FC<{task: string}> = ({task}) => {
    return (
        <div className={styles.task}>
            {task}
            <div className={styles.icons}>
                <FaPen/>
                <FaTrash/>
            </div>
        </div>
    );
}

export default Task;