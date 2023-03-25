import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";


const AddTodoForm = ({ todos, settodos, didUpdate, setUpdate }) => {

  const [todoText, setTodotext] = useState("")
  const [hasError, setHasError] = useState(false)
  
  
  const handlesubmit = (e) => {

    e.preventDefault()

    if (todoText === "") {
      alert("todo text can't be empty")
      return
    }

    const newtodo = {

      id: String(new Date().getTime().toString()),
      text: todoText,
      date: new Date(),
      İsdone: false

    }
    axios.post("http://localhost:3004/todos", newtodo)
      .then(res => {
        setUpdate(!didUpdate)

      })
      .catch(err => {
        setHasError(true)
      })

  }
  return (

    <div className="container my-5 ">
      <form onSubmit={handlesubmit}>
        <div class="input-group mb-3">
          <input value={todoText} onChange={(e) => setTodotext(e.target.value)} type="text" className="form-control" placeholder="enter text" />
          <button className="btn btn-primary" type="submit" id="button-addon2">Button</button>


        </div>
      </form>

      {
      hasError === true && (
          <Modal hasError={hasError} setHasError={setHasError} />
        )
      }
    </div>
  )
}

export default AddTodoForm;