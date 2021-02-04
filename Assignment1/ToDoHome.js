import { useSelector } from "react-redux";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInputListGlobal, deleteInputListGlobal } from "./todoSlice";
import App from "./App.css"

function ToDoHome() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("Task List");
    const [temp,setTemp] = useState('Temp');    
    //******************************************** */
    const [text, setText] = useState('')
    const handleChange  = e => setText(e.target.value)
    //********************************************* */
    const addTaskToList = (e) =>
    {
      dispatch(addInputListGlobal(text))
      setText('')
    }
    const deletrTaskFromList = (index) =>{
      dispatch(deleteInputListGlobal(index));   
    }
   //********************************************* */
    const inputlistGlobal = useSelector((state)=>{
        return state.todoReducer.inputlistGlobal;
         })
    //******************************************** */ 
    return (
       <div className="body">  
       <div className="App">
       <h1>{title}</h1>
    <input
      type="text"
      placeholder="What needs to be done?"
      autoFocus={true}
      value={text}
      onChange={handleChange}
    />
      <button onClick={(addTaskToList)} >+
      </button>

        <ol>
        {inputlistGlobal.map((items, index) => {
         return (
              <div className="todo_style"> 
                <li>  <i class="fa fa-times" aria-hidden="true"
                onClick ={(e)=>{
                  console.log("Items : " + items);
                  console.log("Index : " + index);
                  console.log("e.target.id :" + e.target.id);
                  console.log("e.target.value :" + e.target.value);
                  dispatch(deleteInputListGlobal(index));   
                               }}
                /> {items}  </li>                   
                </div>
         )
        })}
       </ol>



      </div>      
      </div>
    )
}

export default ToDoHome

