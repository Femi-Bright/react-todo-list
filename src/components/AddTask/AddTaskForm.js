import { useRef, useState } from 'react'
import styles from './AddTaskForm.module.css'

const AddTaskForm = ({onHandleTask}) => {
  const taskInput = useRef()
  const [errorMessage, setErrorMessage] = useState("")

  const addTaskHandler = (event) => {
      event.preventDefault()
      const enteredTask = taskInput.current.value;
      if (enteredTask.trim().length === 0) {
        setErrorMessage("Field cannot be empty!")
        return
      }
      onHandleTask(enteredTask)
      taskInput.current.value = ""
  }
  return (
    <form className={styles.form} onSubmit={addTaskHandler}>
      <input 
        type="text" 
        className={styles["add-task_input"]} 
        placeholder="Enter task"
        ref={taskInput}
      />
      {errorMessage && <p className={styles["error-message"]}>{errorMessage}</p>}
      <button type="submit" className={styles["add-task_button"]}>Add</button>
    </form>
  )
}

export default AddTaskForm