import { useEffect, useState } from "react"

export default function CalendarWrap({selectedDate}){
  const [newTask, setNewTask] = useState('')
  const [taskList, setTaskList] = useState([])
  const [currentTasks, setCurrentTasks] = useState([])

  useEffect(() =>{
    setCurrentTasks(
      taskList.filter(task => {
        return task.date === selectedDate
      })
    )
  }, [taskList, selectedDate])

  console.log(currentTasks, 'current list')
  console.log(taskList, 'task list')

  function handleAddTask(){
    setTaskList((currentList) => {
      return [...currentList, {date: selectedDate, task: newTask, id:crypto.randomUUID()}]
    })
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
      <p>{`Schedule for ${selectedDate}`}</p>
      <div>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
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