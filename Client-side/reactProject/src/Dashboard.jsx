import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { RiAccountCircleFill } from "react-icons/ri";
import { BsSend } from "react-icons/bs";
import { IoIosContacts } from "react-icons/io";
import { FaChessQueen } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import './Dashboard.css';

function Dashboard() {
 

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('userData');

    // Redirect to the login page
    navigate('/');
  };

  const handleMenuClick = (key) => {
    // You can add logic here to navigate to the corresponding component
    navigate(`/${key}`);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">

          <Nav className="mr-auto">
          
            <Nav.Item onClick={() => handleMenuClick('contact')} ><IoIosContacts /> Contact</Nav.Item>
            <Nav.Item onClick={() => handleMenuClick('campaign')}><BsSend />  Campaign</Nav.Item>
          </Nav>
          <Nav>
      


          <div className="account-dropdown-wrapper">
          <NavDropdown
  title={<><RiAccountCircleFill /> Account</>}
  id="basic-nav-dropdown"
  className="custom-dropdown" // Add a custom class to the dropdown
>
  <NavDropdown.Item
    onClick={() => handleMenuClick('plan')}
    className="custom-dropdown-item" // Add a custom class to the dropdown item
  >
   <FaChessQueen /> Upgrade the Plan
  </NavDropdown.Item>
  <br />
  <NavDropdown.Item
    onClick={handleLogout}
    className="custom-dropdown-item" // Add a custom class to the dropdown item
  >
   <IoIosLogOut />  Logout
  </NavDropdown.Item>
</NavDropdown>
             </div>
      
          </Nav>
        
      </Navbar>
    </>
  );
}

export default Dashboard;
