import { useEffect, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage";

export default function CalendarWrap({selectedDate, setHasValues}){ 
  const [newTask, setNewTask] = useState('')    //value from text input
  const [taskList, setTaskList] = useLocalStorage('CALENDAR-TASKS',[])
  const [currentTasks, setCurrentTasks] = useState([])

  useEffect(() =>{  // Filters the tasks that match the selected day on the calendar in a new array
    setCurrentTasks(
      taskList.filter(task => {
        return task.date === selectedDate
      })
    )
  }, [taskList, selectedDate])

  useEffect(() => {
    setHasValues(() => {
      return taskList})
  }, [currentTasks])

  function handleAddTask(){  //Adds task to local storage with right properties
    if(newTask === '') return
    setTaskList((currentList) => {
      return [...currentList, {date: selectedDate, task: newTask, id:crypto.randomUUID()}]
    })
    setNewTask('')
  }

  function handleDeleteTask(id){ // 
    const filteredArray = taskList.filter(item => {
      return item.id !== id  //keeps only the items that dont match the id and returns a new array
    })

    setTaskList(() => {
      return filteredArray  //saves the new list without the item we delete
    })
  }

  return (
    <div className='calendar-events'>
      {selectedDate === undefined ? <p className="calendar-title">Select a date</p> : <p className="calendar-title">{`Schedule for ${selectedDate}`}</p>}
      <div className="calendar-input-wrap">
      <input type="text" className="calendar-input" placeholder="New task" value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}/>
      <button className="calendar-btn" onClick={handleAddTask}>+</button>
      </div>
      <ul className="calendar-task-list">
        {currentTasks.length === 0 ? <p>Nothing scheduled</p> :
        currentTasks.map(task => {
          return <CalendarItem task={task.task} key={task.id} id={task.id} onDelete={handleDeleteTask} />
        })
        }
      </ul>
      </div>
  )
}

function CalendarItem({task, id, onDelete}){  //secondary component defined in the same page, used right above

  return (
    <li className="todo-wrap-calendar">
      <label className="calendar-task-label">
        <span> {task}</span>
      </label>
        <button
          className="delete-button"
          onClick={() => {
            onDelete(id);
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
    </li>
  );
}