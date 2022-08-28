import { useState } from 'react';
import ReactDom from 'react-dom'
import styles from './App.module.css';
import Card from './components/UI/Card'
import AddTaskForm from './components/AddTask/AddTaskForm';
import TaskList from './components/Tasks/TaskList';

function App() {
  const [addTaskFormVisibility, setTaskFormVisibility] = useState(false)
  const [tasks, setTasks] = useState([])
  const showAddTaskForm = () => setTaskFormVisibility(true)
  
  const addTask = (task) => {
    setTasks((prevTasks) => (
      [
        {
          id: prevTasks.length + 1,
          name: task,
          completed: false,
        },
        ...prevTasks
      ]
    ))
  }

  const completeTask = (taskId) => {
    setTasks((prevTasks) => (
      prevTasks.map(prevTask => prevTask.id === taskId ? {
        ...prevTask,
        completed: !prevTask.completed
      } : prevTask)
    ))
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const Attribution = () => <p className={styles.attribution}>
      Proudly Developed with <i className="bi bi-heart"></i> by <a href="http://www.twitter.com/brightadigwe" className={styles["attribution_link"]} target="_blank" rel="noreferrer">Bright Adigwe</a>
    </p>

  return (
      <div className={styles.App}>
        <Card>
          <h1 className="main-heading">Todo List</h1>
          <div className={!addTaskFormVisibility ? styles["add-task__heading-group"] : ''}>
            <h2 className="sub-heading">Add task</h2>
            {!addTaskFormVisibility && (
              <button 
                type="button" 
                className={styles["add-task__icon"]}
                onClick={showAddTaskForm}
              >
              <i className="bi bi-plus"></i>      
            </button>
            )}       
          </div>
          {addTaskFormVisibility && <AddTaskForm onHandleTask={addTask} />}
          <TaskList 
            tasks={tasks} 
            onCompleteTask={completeTask} 
            onDeleteTask={deleteTask}
          />
        </Card>
        {ReactDom.createPortal(<Attribution/>, document.getElementById("attribution"))}
      </div>
  );
}

export default App;
