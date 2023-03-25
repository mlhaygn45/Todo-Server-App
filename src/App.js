import React, { useState, useEffect } from "react";
import AddTodoForm from "./componets/AddTodoForm";
import SingleTodo from "./componets/SingleTodos";
import axios from "axios";
import Modal from "./componets/Modal";


function App() {
  const [todos, settodos] = useState(null)
  const [didUpdate, setUpdate] = useState(false)
  useEffect(() => {

    axios.get("http://localhost:3004/todos")
      .then(res => {

        settodos(res.data)

      })
      .catch(err => {
        alert("veriler çekilemedi")
      })
  }, [didUpdate])

  if (todos === null) {
    return
  }

  return (
    <div>
 
      <AddTodoForm todos={todos} settodos={settodos} didUpdate={didUpdate} setUpdate={setUpdate} />
    

      {

        todos.length === 0 ? (<h1 className="text-center">Nothing to do</h1>) : (

          <div>

            {

              todos.map((item, index) => (


                <SingleTodo key={index} item={item} todos={todos} settodos={todos} didUpdate={didUpdate} setUpdate={setUpdate} />


              ))
            }


          </div>

        )
      }
      
    </div>
  )
}

export default App;
