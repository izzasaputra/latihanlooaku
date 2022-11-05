import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [inputForm, setInputForm] = useState("");
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();

    axios
      .post(`http://localhost:3000/todos`, { todo: inputForm })
      .then(navigate("/"))
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <h1>Ini Halaman Form lo isti</h1>
      {inputForm.todo}
      <form onSubmit={handleSubmit}>
        <label>
          todo <br />
          <input
            type="text"
            value={inputForm.todo}
            onChange={(evt) => setInputForm(evt.target.value)}
          />
          <button>Tambah Dong</button>
        </label>
      </form>
    </>
  );
}
