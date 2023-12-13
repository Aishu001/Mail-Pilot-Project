// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import './Home.css'; // Link to your external CSS file

function Home() {
  
  return (
<>
       

<div className="navbarr">
      <Image src='Logo.png' className="logo" />

      <div className="buttons">
        <Link to='/login'>
          <Button  className='btns' size='lg'>
            Login
          </Button>
        </Link>
        <Link to='/signup'>
          <Button  className='btns' size='lg'>
            Sign up
          </Button>
        </Link>
      </div>
    </div>

      <br />    
     
      <div className="containerr">
      <div className="text-content">
        <h1>Mail Pilot</h1>
        <p>
          Welcome to MailPilot, your all-in-one solution for seamless email
          management. MailPilot streamlines the inbox for organization and
          focus with intuitive features. Take control of your digital
          communication journey with MailPilot.
        </p>
      </div>
      <Image src='home.png' className="image" />
    </div>


   

</>
  );
}

export default Home;
