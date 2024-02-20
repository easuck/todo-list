import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TaskForm from "./assets/components/form/taskForm.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TaskForm/>
  </React.StrictMode>,
)
