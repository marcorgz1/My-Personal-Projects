import { useState } from 'react';
import './taskForm.css';

function TaskForm ({ createTask }) {
    const [title, setTitle] = useState('');

    // Función para almacenar en el estado "title" lo que se escriba en el input del formulario
    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();    

        createTask(title);        
    }

    return (
        <form className="task_form" onSubmit={handleSubmit}>
            <input placeholder="Escribe tu nueva tarea..." onChange={handleChange} />
            <button>Añadir</button>
        </form>
    )
}

export default TaskForm;
