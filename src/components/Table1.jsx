import { TableCell, TableContainer, TableHead, TableRow,Table,TableBody } from '@mui/material'
import React,{useState} from 'react'

 const Table1 = () => {
  var [names,setNames] =useState(["Ronia","Pearl","Hanna"])
    return (
    <div style={{paddingTop:"50px"}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell style={{color:"red",fontFamily:"cursive",fontSize:"30px"}}>Name</TableCell>
                    <TableCell style={{color:"red",fontFamily:"cursive",fontSize:"30px"}}>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {names.map((value,index)=>{
                    return(
                      <TableRow>
                        <TableCell>{value}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
</Table>
</TableContainer>
</div>
 )
}

export default Table1