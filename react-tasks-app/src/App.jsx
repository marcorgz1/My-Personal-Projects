// Se utilizan las llaves ya que la variable no la estamos exportando como default
import { tasks as tasksList } from './tasks.js'
import { useState, useEffect } from 'react'

import TasksList from './components/TasksList/TasksList.jsx';
import TaskForm from './components/TasksForm/TasksForm.jsx';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
        setTasks(tasksList)
        console.log('Lista tareas:', tasksList)
    }, [])
    
    const createTask = (taskTitle) => {
      // Añadir nueva tarea a las tareas existentes de la lista
      const newTasksList = [...tasks, {
        id: tasks.length,
        title: taskTitle,
        description: "Esta es una nueva tarea"
      }]
      // Guardar lista de tareas con la nueva tarea en el estado
      setTasks(newTasksList)
    }

  return (
    <>
      <h1>Tasks List</h1>
      <TaskForm createTask={createTask} />
      <TasksList tasks={tasks} />
    </>
  )
}

export default App;
