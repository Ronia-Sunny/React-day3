import React ,{ useState} from 'react'
import {Button,Typography} from '@mui/material'
   
const Buttons = () => {
    var[hname,setHname]=useState("");
    const ChangeHname =()=>{
        setHname("Home Page")
    }
    const ChangeGname =()=>{
        setHname("Gallery Page")
    }
    const ChangeCname =()=>{
        setHname("Contact Page")
    }
  return (
    <div>
        <Button variant='contained' color='primary' onClick={ChangeHname}>HOME</Button>&nbsp;
        <Button variant='contained' color='secondary' onClick={ChangeGname}>GALLERY</Button>&nbsp;
        <Button variant='contained' color='success' onClick={ChangeCname}>CONTACTS</Button>&nbsp;
        <br/>
        <Typography variant='h3'>Welcome to{hname}</Typography>  
    </div>
  )
}

export default Buttons 