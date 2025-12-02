
import './tasksList.css'

function TasksList({ tasks }) {
    if (tasks.length === 0) {
        return <h2>No hay tareas en la lista</h2>
    }

    return (
        <section className='tasks_list'>
            {
                tasks.map((task) => (
                    <div key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                    </div>
                ))
            }
        </section>
    )
}

export default TasksList
