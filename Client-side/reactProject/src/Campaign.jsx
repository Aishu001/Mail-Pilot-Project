import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './Campaign.css'
import Dashboard from './Dashboard';

function Campaign() {
  const [emailData, setEmailData] = useState({
    userProvidedFrom: '',
    to: [], // Change to an array to store multiple recipients
    subject: '',
    text: '',
  });

  const [validated, setValidated] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);
  const [groupEmail, setGroupEmail] = useState([]);

  const handleForm = () => {
    setToggleForm(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setEmailData({
      ...emailData,
      file,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create FormData object to handle file and other form data
    const formData = new FormData();
    formData.append('from', emailData.from);
    formData.append('to', emailData.to);
    formData.append('subject', emailData.subject);
    formData.append('text', emailData.text);
    formData.append('file', emailData.file);

    // Your form submission logic here
    console.log('Form submitted:', emailData);

    // Use formData in the axios.post request
    axios.post('https://mail-pilot-project.onrender.com/campaign/send/BulkEmail', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    // Reset the form and validation state
    setEmailData({
      from: '',
      to: [],
      subject: '',
      text: '',
      file: null,
    });
    setValidated(false);
    setToggleForm(false);
  };


  useEffect(() => {
    axios.get('https://mail-pilot-project.onrender.com/contact/list/all').then((res) => {
      console.log("Response", res);
      setGroupEmail(res.data);
  
      // Initialize the to field with email IDs from groupEmail
      setEmailData((prevEmailData) => ({
        ...prevEmailData,
        to: res.data.map((contact) => contact.emailId),
      }));
    });
  }, []);
  ;

    


  return (
    <>
     <Dashboard/> 

    <div>
    <Button onClick={handleForm} className='create'> create an email campaign </Button>
    </div>
   
 
   {toggleForm ? 
    <Form onSubmit={handleSubmit} className='containerrr'>
  <div className='custom-form-groupp'>

    <Form.Group controlId="validationCustom02" className='custom-form-group'>
      <Form.Label className='formlabel'>From</Form.Label>
      <Form.Control
        required
        type="email"
        placeholder="Enter your email"
        isInvalid={validated}
        onChange={handleChange}
        value={emailData.from}
        name="from"
        className='formInput'
      />
     
    </Form.Group>


<Form.Group key="Receiver" className='custom-form-group'>
      <Form.Label className='formlabel'>To</Form.Label>
      <Form.Control
        plaintext
        readOnly
        defaultValue={emailData.to.join(', ')}
        name="to"
        className='formInput'
      />
      <input type="hidden" name="recipients" value={emailData.to.join(',')} />
    </Form.Group>


    
    <Form.Group className='custom-form-group'>
      <div className='form-group-inner'>
        <Form.Label className='formlabel'>Subject</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Re:"
          isInvalid={validated}
          onChange={handleChange}
          value={emailData.subject}
          name="subject"
          className='formInputSubject'
        />
      </div>
    </Form.Group>

     


    <Form.Group controlId="exampleForm.ControlTextarea1" className='custom-form-group'>
      <Form.Label className='formlabel'>Enter your Message</Form.Label>
      <Form.Control
        as="textarea"
        rows={70}
        isInvalid={validated}
        onChange={handleChange}
        value={emailData.text}
        name="text"
        className='formInputTextArea'
      />
    </Form.Group>

    <Form.Group controlId="formFile" className='custom-form-group'>
      <Form.Label className='formlabel'>Attachment</Form.Label>
      <Form.Control type="file" onChange={handleFileChange}  className='formInput' />
    </Form.Group>

    <Button type="submit" className='send'>Send</Button>
  </div>
</Form>
: null  }
   
   
    
    </>
  )
}

export default Campaign


  

 