import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {  Link  } from "react-router-dom"
import EditContact from './EditContact';
// import { AiOutlineMore } from 'react-icons/fa';
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import './Contact.css'
import Dashboard from './Dashboard';

function Contact() {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);


  

  useEffect(() => {

    axios.get('https://mail-pilot-project.onrender.com/contact/list/all').then((res) => {
      const columnKeys = Object.keys(res.data[0]).filter((key) =>   key !== '__v');

      setColumns(columnKeys);
      setRows(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    try {
      axios
        .delete(`https://mail-pilot-project.onrender.com/contact/list/delete/${id}`)
        .then((response) => {
          setRows((previousRows) => {
            return previousRows.filter((row) => {
              return row._id !== id;
            });
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  



  return (
    <>
   <Dashboard/> 

   
<Link to='/AddContact'><Button className='createAdd' > Create a Contact </Button></Link>

 <div className='intro'>
  <h1>Contacts</h1>
  <h3>This is your contact database. From here, you can view, organize and manage your contacts, individually or as a group.</h3>
 </div>
<div className='tableContainer' >
<Table striped bordered hover size="sm">
        <thead>
          <tr>
        
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email ID</th>
                        <th>Action</th>
          
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.emailId}</td>
              <td>
              <Link to={`/UpdateContact/${row._id}`}> <Button className='iconn'> <FaEdit /></Button> </Link>
               
              <Button className='iconn' onClick={() => {
                handleDelete(row._id)
              }}> <MdDeleteSweep />
              </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
</div>
      
      
    </>
  );
}

export default Contact;
