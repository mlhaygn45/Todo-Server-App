import React, { useState } from "react";
import axios from "axios";



const SingleTodo = ({ item, todos, settodos, didUpdate, setUpdate }) => {
    const [isEditClicked, setIsEditCliked] = useState(false)
    const [done, setİsdone] = useState(false)
    const [has, sethas] = useState(false)
    const [güncelleText, setgüncelletext] = useState(item.text)

    const handleDelete = () => {
        axios.delete(`http://localhost:3004/todos/${item.id}`)
            .then(res => {
                setUpdate(!didUpdate)

            })
            .catch(err => { })

    }



    const handleEdit = (e) => {
        if (güncelleText === "") {
            alert("boş bırakılmaz")
            return
        }
        if (güncelleText < 4) {
            alert("todo text must be at least 3 characters")
            return
        }

        const degistir = {
            ...todos,
            text: güncelleText,
            date: new Date()


        }
        axios.put(`http://localhost:3004/todos/${item.id}`, degistir)
            .then(res => {

                setUpdate(!didUpdate)
                setgüncelletext(false)
            })
            .catch(err => { })
    }
    return (

        <div className="container">


            <div className={`container alert alert-${done === false ? "secondary" : "success"} 
            d-flex align-items-center justify-content-between`}>
                <div className="">
                    {
                        isEditClicked === true ? (
                            <form onSubmit={handleEdit}>
                                <div class="input-group mb-3">
                                    <input value={güncelleText} onChange={(e) => setgüncelletext(e.target.value)} type="text"
                                        className="form-control" placeholder="enter text" />
                                    <button className="btn btn-primary" type="submit" id="button-addon2">save</button>
                                    <button onClick={() => {
                                        setIsEditCliked(false)
                                        setgüncelletext(item.text)
                                    }}
                                        className="btn btn-danger"
                                        type="submit"
                                        id="button-addon2">cancel</button>


                                </div>
                            </form>) :

                            (<h1>{item.text} </h1>)




                    }


                    <p>{new Date(item.date).toLocaleString().replaceAll(".", "/")} </p>
                </div>

                {isEditClicked === false && (

                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button onClick={() => {
                            setIsEditCliked(true)

                        }} className="btn btn-primary">Edit</button>
                        {done === false ? (<button onClick={() => setİsdone(true)} className="btn btn-warning">isdone</button>) :

                            (<button onClick={() => setİsdone(false)} className="btn btn-success">done</button>)}

                        <button onClick={handleDelete} type="button" class="btn btn-danger">delete</button>

                    </div>
                )



                }

            </div>
        </div>
    )



}













export default SingleTodo





