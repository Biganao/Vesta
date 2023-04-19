import { FaCheckDouble, FaEdit, FaRegTrashAlt } from 'react-icons/fa'

const Task = ({ task, index, deleteTask, getSingleTask, setToComplete }) => {
  return (
    <div className={task.completed ? "task completed" : "task"}>
        <p>
            <span style={{fontWeight: "bold"}}>{index + 1}. </span>
            {task.name}
        </p>
        <div className="task-icons">
            <FaCheckDouble color='green' onClick={() => setToComplete(task)}/>
            <FaEdit color='purple'  onClick={() => getSingleTask(task)} />
            <FaRegTrashAlt color='red' onClick={() => deleteTask(task._id)} />
        </div>
    </div>
  )
}

export default Task