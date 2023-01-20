import React, { useState, useEffect } from 'react';
import axios from "axios"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Model from './Model';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);
const [index,setIndex]=useState(0)
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div> 
         <TableContainer component={Paper}>
      <Table sx={{ minWidth:1349, mt:3}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'><b>Name</b></TableCell>
            <TableCell align="center"><b>Gender</b></TableCell>
            <TableCell align="center"><b>Email</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
           {users.map((user,index) =>(
             <TableRow key={user.id}  onClick={()=>handleClickOpen() & setIndex(index)}>
                <TableCell align="center">
                <img src={user.image} alt="" height="50px" width="50px" />    {user.firstName} {user.maidenName} {user.lastName}
                </TableCell>
                <TableCell align="center">{user.gender}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
             </TableRow>
           ))}
            
      </TableBody>
        </Table>
    </TableContainer>
    <Model setOpen={setOpen} open={open} index={index} users={users}/>
    </div>
  );
};

export default UserList;

