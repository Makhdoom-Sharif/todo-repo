import React from 'react'
import {Alert,  IconButton } from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';

function App() {

    const [todoList, setTodoList] = useState([]);
    const [text, setText] = useState("");
    const [btntext, setBtntext] = useState("Add");
    const [indexNew, setindexNew] = useState();
    const [ebit, setEbit] = useState(0);
    const [disable,setDisable]=useState(false);
    const [resetBit, setResetBit] = useState(false);
  const submitHandler=(e)=>{
    text.trim()?(btntext === "Add" ? addItem() : updateItem()):(error());
    e.preventDefault();
  }
const error = ()=>{
    setEbit(1)
}

    const addItem = (e) => {
        setEbit(0);
      setTodoList([...todoList, text]);
      setText("");
    };
  
    const deleteItem = (index) => {
      const tempList = [...todoList];
      tempList.splice(index, 1);
      setTodoList(tempList);
    };
    const resetItem=()=>{
      setText("")
      setDisable(false)
      setResetBit(false)
      setBtntext("Add")
    }
    const updatebtn = (index) => {
      setResetBit(true);
      setDisable(true);
      setEbit(0);
      setText(todoList[index]);
      setBtntext("Update");
      setindexNew(index);
    };
    const updateItem = () => {
      setResetBit(false);
      setDisable(false);
      todoList[indexNew] = text;
      setTodoList([...todoList]);
      setBtntext("Add");
      setText("");
    };

    return (
        <div className='container'>
        <div>
        {ebit===1 &&<Alert variant="filled" severity="error">
        Input filled must be filled
          </Alert>}
        </div>
        


        
        
        <form onSubmit={(e) => submitHandler(e)}>
        <div id="newtask">  
          <input  placeholder="Enter Your Today's Tasks" value={text}
            onChange={(e) => setText(e.target.value)}></input>
         
        <button style={{marginLeft:"5px"}}  type="submit" >
        {btntext}
        </button>
        {resetBit && <button style={{marginLeft:"5px"}} onClick={() => resetItem()}>Reset</button>}
        
        </div>
        </form>







        <div>
          <ul  className='tasks'>
            {todoList.map((item, index) => {
              return (
              
                <li className='task'  key={index}>
                  {item}
                  <div className='buttons'>
                  <IconButton aria-label="Add" disabled={disable} onClick={() => deleteItem(index)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton aria-label="Add" disabled={disable} onClick={() => updatebtn(index)}>
                    <UpdateIcon  />
                  </IconButton>
                  </div>
                </li>
                
              );
            })}
          </ul>
          </div>
      </div>
    );
  }
  export default App;