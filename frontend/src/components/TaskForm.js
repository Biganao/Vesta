
const TaskForm = ({ createTask, name, handleInputChange, isEditing, updateTask }) => {
  return (
    <form className="task-form" onSubmit={isEditing ? updateTask : createTask}>
        <input 
            type="text" 
            placeholder="Adcione uma Tarefa" 
            name="name" 
            value={name} 
            onChange={handleInputChange} 
        />
        <button type="submit">{isEditing ? "Editar" : "Adcionar"}</button>
    </form>
  )
}

export default TaskForm