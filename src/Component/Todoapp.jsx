import React from 'react'
import Box from '@mui/material/Box';
import {Alert, Button, FormControl, IconButton,  OutlinedInput } from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';

function App() {
    const [todoList, setTodoList] = useState([]);
    const [text, setText] = useState("");
    const [btntext, setBtntext] = useState("Add");
    const [indexNew, setindexNew] = useState();
    const [ebit, setEbit] = useState(0);
  
const error = ()=>{
    setEbit(1)
}

    const addItem = () => {
        setEbit(0);
      setTodoList([...todoList, text]);
      setText("");
    };
  
    const deleteItem = (index) => {
      const tempList = [...todoList];
      tempList.splice(index, 1);
      setTodoList(tempList);
    };
    const updatebtn = (index) => {
      setEbit(0);
      setText(todoList[index]);
      setBtntext("Update");
      setindexNew(index);
    };
    const updateItem = () => {
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
        
        
        <div id="newtask">  
          <input placeholder="Enter Your Today's Tasks" value={text}
            onChange={(e) => setText(e.target.value)}></input>
        <button  onClick={() => text?(btntext === "Add" ? addItem() : updateItem()):(error())} >
        {btntext}
        </button>
        </div>
        <div>
          <ul  className='tasks'>
            {todoList.map((item, index) => {
              return (
              
                <li className='task'  key={index}>
                  {item}
                  <div className='buttons'>
                  <IconButton aria-label="Add" onClick={() => deleteItem(index)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton aria-label="Add" onClick={() => updatebtn(index)}>
                    <UpdateIcon />
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