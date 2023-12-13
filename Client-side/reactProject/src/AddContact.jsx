import axios from 'axios';
import React , {useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './Form.css';

function AddContact() {

    
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
       firstName: '',
       lastName: '',
       emailId : ''
      });
      const [formErrors, setFormErrors] = useState({});

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });

        setFormErrors({
          ...formErrors,
          [name]: null,
        });
      
        // Validate the form field as the user types
        const newErrors = findFormErrors();
        console.log('Form Errors:', newErrors); // Log the form errors
        setFormErrors(newErrors);
      };

          const handleSubmit = async (event) => {
            event.preventDefault(); // Prevent default form submission
            const newErrors = findFormErrors();

            if (Object.keys(newErrors).length > 0) {
              // Set formErrors state to display validation errors
              setFormErrors(newErrors);
            } else {
            try {
  
        
              const response = await axios.post('http://localhost:3000/contact/list/create',formData);
              console.log(response.data);     
              navigate('/contact')
         // Navigate to the home page
              // Set to true after the form is submitted
            } catch (error) {
              console.error(error);
            }
          };
        }

        const findFormErrors = () => {
          const { firstName , emailId } = formData;
          const newErrors = {};
      
          // name errors
          if (!firstName || firstName === '') newErrors.firstName = 'Name cannot be blank!';
          else if (firstName.length > 30) newErrors.firstName = 'Name is too long!';
      
          // email errors
          if (! emailId ||  emailId === '') newErrors. emailId = 'Email cannot be blank!';
   
          return newErrors;
        };
      

          const handleCancel = () => {
            navigate('/dashboard')
          }
        
       
    

  return (
    <>
    <Container>
    <Form  onSubmit={handleSubmit} className="Container">
    <h1 className='h1'>Add A Contact </h1>

    <div className="FormLabel">
    <Form.Label  className="FormLabell">First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your First Name"
            isInvalid={!!formErrors.firstName}
            onChange={handleChange}
            value={formData.firstName}
            name="firstName"
            className="FormControl"
          />
          <Form.Control.Feedback type="invalid" className="FormFeedback">
          {formErrors.firstName}
          </Form.Control.Feedback>
    </div>
         
    <div className="FormLabel"> 
    <Form.Label className="FormLabel">Last name</Form.Label>
          <Form.Control
          required
            type="text"
            placeholder="Enter you Last nam (Optional)"
            onChange={handleChange}
            value={formData.lastName}
            name="lastName"
            className="FormControl"
          /></div>
        
          
       
        <div className="FormLabel">
        <Form.Label className="FormLabel">Email Id</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="eg:exampleId@gmail.com"
          isInvalid={!!formErrors. emailId}
          onChange={handleChange}
          value={formData.emailId}
          name="emailId"
          className="FormControl"
        />
        <Form.Control.Feedback type="invalid" className="FormFeedback">
        {formErrors. emailId}
          </Form.Control.Feedback>
    
        </div>
     
   
  <div className='buttons'>
  <Button type="submit" className='signIn' onClick={handleSubmit}>Submit</Button>
   <Button type="button"  className='cancel' onClick={handleCancel} >Cancel</Button> 
  </div>
   
   
  </Form>
    </Container>
   
    </>
  )
}

export default AddContact