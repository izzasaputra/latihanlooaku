import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedData = localStorage.getItem("todos");
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return [];
    }
  });
  const [formInput, setFormInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [update, setUpdate] = useState();

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isEdit) {
      setIsEdit(false);
      const data = { id: update.id, todo: formInput };
      const updatedata = todos.map((todoNow) => {
        return todoNow === update ? data : todoNow;
      });
      setFormInput("");
      setTodos(updatedata);
    } else {
      setTodos([...todos, { id: todos.length + 1, todo: formInput }]);
      setFormInput("");
    }
  }

  function handleDelete(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id != id;
    });
    setTodos(removeItem);
  }

  function handleEdit(todo) {
    setFormInput(todo.todo);
    setIsEdit(true);
    setUpdate(todo);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1>Halo Ayang</h1>
      <form onSubmit={handleSubmit}>
        <label>
          todo
          <input
            type="text"
            value={formInput}
            onChange={(evt) => setFormInput(evt.target.value)}
          />
          <button>Tambah</button>
        </label>
      </form>
      {todos.map((todo) => (
        <ul>
          <li>
            {todo.todo + " "}
            <button onClick={() => handleDelete(todo.id)}>selesai</button>
            <button onClick={() => handleEdit(todo)}>Edit</button>
          </li>
        </ul>
      ))}
    </>
  );
}

export default App;
