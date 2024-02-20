import TaskForm from "./form/taskForm.tsx";
import {useState} from "react";
import Task from "./task/task.tsx";

const FormWrapper = () => {
    const [tasks, setTasks] = useState<string[]>([]);

    const addTask = (task: string) =>{
        setTasks([...tasks, task])
    }

    return (
        <div>
            <TaskForm addTask={addTask}/>
            {tasks.map((text, index) =>(
                <Task task={text} key={index}/>
            ))}
        </div>
    );
}

export default FormWrapper;