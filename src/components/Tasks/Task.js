import styles from './Task.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Task = ({task,  onCompleteTask, onDeleteTask}) => {
  const taskCompletedHandler = (taskId) => {
    onCompleteTask(taskId);
  }
  const deleteTaskHandler = (taskId) => {
    onDeleteTask(taskId);
  }

  return (
    <li className={styles.task}>
      <button type="button" className={styles["toggle-completed"]} onClick={() => taskCompletedHandler(task.id)}>
        <i className={`${styles["task__icon"]} bi ${task.completed ? 'bi-check-circle-fill' : 'bi-circle'} `}></i>
      </button>
      <p className={`${styles["task-name"]} ${task.completed ? styles["strikethrough"] : ''}`}>{task.name}</p>
      <i className={`${styles["task__icon"]} bi bi-trash`} onClick={() => deleteTaskHandler(task.id)}></i>
    </li>
  )
}

export default Task