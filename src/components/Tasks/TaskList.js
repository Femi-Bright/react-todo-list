import styles from './TaskList.module.css'
import chillingLady from './chilling-lady.png'
import Task from './Task';

const TaskList= ({tasks, onCompleteTask, onDeleteTask}) => {
  
  return (
    <>
      <h2 className="sub-heading">My tasks</h2>
      {tasks.length > 0 ? (
        <ul className={styles.tasks}>
          {tasks.map(task => (
            <Task  key={task.id} task={task} 
              onCompleteTask={onCompleteTask} 
              onDeleteTask={onDeleteTask} 
            />
          ))}
        </ul>
      ) : (
        <figure>
          <img src={chillingLady} className={styles["no-task__img"]} alt="Lady chilling on couch" />
          <figcaption className={styles["no-task__img-caption"]}>You have no task to do</figcaption>
        </figure>
      )}
    </>
  )
}

export default TaskList