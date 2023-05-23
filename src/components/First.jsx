import React from 'react'
import {Typography,TextField,Button} from '@mui/material';

const First = () => {
 return (
    <div> 
    {/* <h1>Are you ready?</h1> */}
    <Typography variant ='h1'>Ronia Sunny</Typography>
    <br/>
    <TextField variant ='outlined' label ='Name'></TextField>
    <br/>
    <br/>
    <Button variant='contained'>Submit</Button>
    </div>
   )
}

export default First