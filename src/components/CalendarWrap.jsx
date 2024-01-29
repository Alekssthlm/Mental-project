import { useEffect, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage";

export default function CalendarWrap({selectedDate, setHasValues}){
  const [newTask, setNewTask] = useState('')
  const [taskList, setTaskList] = useLocalStorage('CALENDAR-TASKS',[])
  const [currentTasks, setCurrentTasks] = useState([])

  useEffect(() =>{
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

  function handleAddTask(){
    if(newTask === '') return
    setTaskList((currentList) => {
      return [...currentList, {date: selectedDate, task: newTask, id:crypto.randomUUID()}]
    })
    setNewTask('')
  }

  function handleDeleteTask(id){
    const filteredArray = taskList.filter(item => {
      return item.id !== id
    })

    setTaskList(() => {
      return filteredArray
    })
  }

  return (
    <div className='calendar-events'>
      {selectedDate === undefined ? <p>Select a date</p> :<p>{`Schedule for ${selectedDate}`}</p>}
      <div>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}/>
      <button onClick={handleAddTask}>ADD TASK</button>
      </div>
      <ul>
        {currentTasks.length === 0 ? <p>Nothing scheduled</p> :
        currentTasks.map(task => {
          return <CalendarItem task={task.task} key={task.id} id={task.id} onDelete={handleDeleteTask} />
        })
        }

        {/* {taskList.length === 0 ? <p>Nothing scheduled</p> : 
        taskList.map((task) =>{
          if(task.date === selectedDate){
            return <CalendarItem task={task.task} key={task.id} id={task.id} onDelete={handleDeleteTask} />
          } 
        })} */}
      </ul>
      </div>
  )
}

function CalendarItem({task, id, onDelete}){

  return (
    <li>
      <label>
        <span> {task}</span>
      </label>
        <button
          className="delete-button"
          onClick={() => {
            onDelete(id);
          }}
        >
          DELETE
        </button>
    </li>
  );
}