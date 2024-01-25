export default function ToDoItem({ todo, id, checked, onDelete, toggleTodo }) {

  return (
    <li className="todo-wrap">
      <label>
        <input
          className="todo-check"
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            toggleTodo(id, e.target.checked);
          }}
        />
        <span className="todo-item"> {todo}</span>
      </label>
      {checked ? (
        <button
          className="delete-button"
          onClick={() => {
            onDelete(id);
          }}
        >
          DELETE
        </button>
      ) : null}
    </li>
  );
}
