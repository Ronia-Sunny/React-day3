import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React,{useState,useEffect} from 'react'
import axios from 'axios'

const ApiGet = () => {
    var[users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        console.log(response.data)
        setUsers(response.data)
        console.log(response.data)

    })
    .catch(err=>console.log(err))
    },[])
    
  return (
    <div style={{paddingTop:'150px'}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>UserName</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((value,index)=>{
                        return(
                            <TableRow>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.username}</TableCell>
                                <TableCell>{value.email}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default ApiGet