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
    

   const ulStyle = {
    background: "#3399ff",
    padding: "2px",
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100%",
   }
    
   const listStyle = {
    background: "#cce5ff",
    color: "darkblue",
    margin: "5px"
   }
    const myStyle = {
        color: "white",
        backgroundColor: "white",
        fontFamily: "Arial",
        margin: "20px",
        display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "flex-end"
      };
  
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
        <>


        {ebit===1 &&<Alert variant="filled" severity="error">
        Input filled must be filled
          </Alert>}



      <div  style={myStyle}>
    
        <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '25ch' }}>
        <OutlinedInput placeholder="Enter Your Today's Tasks" value={text}
            onChange={(e) => setText(e.target.value)} />
      </FormControl>
    </Box>


        <Button variant="contained" color="success" onClick={() => text?(btntext === "Add" ? addItem() : updateItem()):(error())} >
        {btntext}
        </Button>
</div>

<div>
          <ul style={ulStyle}>
            {todoList.map((item, index) => {
              return (
                <li style={listStyle} key={index}>
                  {item}
                  
                  <IconButton aria-label="Add" onClick={() => deleteItem(index)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton aria-label="Add" onClick={() => updatebtn(index)}>
                    <UpdateIcon />
                  </IconButton>
                  
                </li>
              );
            })}
          </ul>

      </div>
      </>
    );
  }
  export default App;