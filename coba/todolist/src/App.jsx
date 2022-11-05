import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedData = localStorage.getItem("ayang");
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return [];
    }
  });
  const [inputForm, setInputForm] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [updateData, setUpdateData] = useState();

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isEdit) {
      setIsEdit(false);
      const data = { id: updateData.id, todos: inputForm };
      const saveEdit = todos.map((todo) => {
        return todo == updateData ? data : todo;
      });
      setTodos(saveEdit);
      setInputForm("");
    } else {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          todos: inputForm,
        },
      ]);
      setInputForm("");
    }
  }

  function handleDelete(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id != id;
    });
    setTodos(removeItem);
  }

  function handleEdit(todo) {
    setInputForm(todo.todos);
    setIsEdit(true);
    setUpdateData(todo);
  }

  useEffect(() => {
    localStorage.setItem("ayang", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1>Halo Ayang</h1>
      <form onSubmit={handleSubmit}>
        <label>
          to do list
          <input
            type="text"
            value={inputForm}
            onChange={(evt) => setInputForm(evt.target.value)}
          />
        </label>
        <button>tambah</button>
      </form>
      {todos.map((map) => (
        <ul key={map.id}>
          <li>
            {map.todos}{" "}
            <Button variant="primary" onClick={() => handleDelete(map.id)}>
              delete
            </Button>{" "}
            <button onClick={() => handleEdit(map)}>Edit</button>
          </li>
        </ul>
      ))}
    </>
  );
}
