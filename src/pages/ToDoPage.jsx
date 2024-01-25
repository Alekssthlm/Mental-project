import { useState } from "react";
import ToDoItem from "../components/ToDoItem";
import useLocalStorage from "../useLocalStorage";

export default function ToDoPage() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useLocalStorage('TODOS', [])

  function handleAddTodo(){
    if(newTodo === '') return
    setTodoList(currentList => {
      return [...currentList, {text: newTodo, id: crypto.randomUUID(), checked: false}]
    })
    setNewTodo('')
  }

  function handleDeleteTodo(id){
    const filteredArray = todoList.filter(item => {
      return item.id !== id
    })

    setTodoList(() => {
      return filteredArray
    })
  }

  function toggleTodo(id, checked){
    
    setTodoList(currentTodoList => {
      return currentTodoList.map(todo => {
        if(todo.id === id) return {...todo, checked}

        return todo
      })
    })
  }

  return (
    <div>
      <div className="input-bar">
        <input className="input-field" type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <button className="add-todo-btn" onClick={handleAddTodo}>ADD TODO</button>
      </div>

      <ul className="todo-list">
        {todoList.length === 0 ? <p>No todos</p> : 
        todoList.map(todo =>{
          return <ToDoItem todo={todo.text} id={todo.id} key={todo.id} checked={todo.checked} toggleTodo={toggleTodo} onDelete={handleDeleteTodo}/>
        })
        }
      </ul>
    </div>
  );
}

