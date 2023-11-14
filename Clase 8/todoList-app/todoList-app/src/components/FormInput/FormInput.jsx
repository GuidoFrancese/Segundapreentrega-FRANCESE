import { useState } from "react"
import { Button } from "../Button/Button"
import { v4 as uuid } from "uuid"


export const FormInput = ({addTask}) => {
    const [input, setinput] = useState("")
    const handleInputChange = (e) => {
         e.preventDefault();
         setinput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newTask = {
            id: uuid(),
            text:input,
            status: false
        }
        addTask(newTask);
        setinput("");
    }
  return (
    <>
    <form className="d-flex col" onSubmit={handleSubmit}>
    <input 
    type="text"
    className="form-control border border-2 border-black"
    placeholder="Ingrese su texto aqui"
    value={input}
    onChange={(e) => handleInputChange ( e ) }
     />
    <Button text="Agregar" type={"submit"}/>

    </form>
    </>
  )
}
