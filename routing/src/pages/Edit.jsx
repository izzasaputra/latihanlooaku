import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  const [inputForm, setInputForm] = useState();
  const params = useParams();
  const navigate = useNavigate();

  async function getData() {
    const data = await axios.get(`http://localhost:3000/todos/${params.id}`);
    setInputForm(data.data.todo);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    await axios.put(`http://localhost:3000/todos/${params.id}`, {
      todo: inputForm,
    });
    navigate("/");
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>Ini Halaman Edit</h1>
      <form onSubmit={handleSubmit}>
        <label>
          todo <br />
          <input
            type="text"
            value={inputForm}
            onChange={(evt) => setInputForm(evt.target.value)}
          />
          <button>Tambah Dong</button>
        </label>
      </form>
    </>
  );
}
