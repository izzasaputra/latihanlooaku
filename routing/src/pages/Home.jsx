import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [todos, setTodos] = useState([]);

  async function getData() {
    const data = await axios.get("http://localhost:3000/todos");
    setTodos(data.data);
  }

  async function handleDelete(id) {
    await axios.delete(`http://localhost:3000/todos/${id}`);
    getData();
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Ini Halaman Home</h1>
      <Link to="/form">
        <button>tambah</button>
      </Link>
      {todos.map((todo) => (
        <ul key={todo.id}>
          <li>
            {todo.todo}
            <Link to={"/Edit/" + todo.id}>
              <button>edit</button>
            </Link>
            <button onClick={() => handleDelete(todo.id)}>delete</button>
          </li>
        </ul>
      ))}
    </>
  );
}
