
import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Result, Spin } from 'antd';
import { QRCode } from 'antd';
import { Image } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './Purchase.css'
import { useParams } from 'react-router-dom';


function Payment() {
 // State variables for form, data, loading, error, and QR code error level
 const [form, setForm] = useState(true);
 const [data, setData] = useState(false);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);
 const [level, setLevel] = useState('L');
 const [value, setValue] = useState(1);
 const { title, price } = useParams();

 console.log("Rendering Payment component");



 // Function to handle payment
 const handlePayment = async () => {
    try {
      setLoading(true);
      setForm(false);

      // Simulate an asynchronous payment confirmation
      const confirmation = await new Promise((resolve) => {
        setTimeout(() => {
          console.log('Payment confirmed');
          resolve(true);
        }, 5000);
      });

      setData(confirmation);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
 };

 return (
    <>
    
   
  
      {/* Render the form if form state is true */}
      {form ? (

       <><div className='Containerstext'>
         <h1 className='tit'> Subcripton plan</h1>
         <div className='priceDet'>
           <h1 className='prr'> {price} /per month</h1>
           <p> {title}</p>
         </div>
       </div><div className='container-center'>

           <Form
             className='Containers'
           >

             {/* Render form items for card number, cardholder name, CVV, expiry date, and UPI ID */}
             <div className="inline-form-item">
               <Form.Item>
                 <span>Card Number : </span> <Input placeholder="123 456 7890" type="text" className='form' /> <span> <Image src="/card.png" className='imgBtn' style={{ width: '40px', height: '30px' }} /></span>
               </Form.Item>
             </div>


             <div className="inline-form-item">
               <Form.Item>
                 <span>Cardholder Name : </span>  <Input placeholder="John Doe" className='form' />
               </Form.Item>
             </div>

             <div className='makeInline'>
               <Form.Item>
                 <span className="customLabell">CVV : </span>         <Input placeholder="123" type="password" pattern="\d*" maxLength={3} className='cvv' />
               </Form.Item>
               <Form.Item>
                 <span className="customLabell">Expiry Date : </span>            <Input placeholder="month" type='text' maxLength={2} className='expiry' />   <Input placeholder="year" type='text' maxLength={2} className='expiry' />

               </Form.Item>
             </div>


             <br />
             <br />
             <div className='upi'>
               <Form.Item>

                 <span className="customLabell">UPI ID : </span>   <Input placeholder="ex: johnDoe@hdfcbank" className='form' />  <Image
                   className='imgBtn'
                   src="/upi.png"
                   style={{ width: '40px', height: '30px' }} />
               </Form.Item>

               <div className='qr-container'>
                 <QRCode

                   errorLevel={level}
                   value="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                   className='qr' />
               </div>

             </div>
             {/* Render QR code */}

             {/* Render button to make payment */}
             <Button type="primary" onClick={handlePayment} className='payment'>
               Make Payment
             </Button>
           </Form>
         </div></>
        
      ) : null}

      {/* Render loading spinner and message if loading state is true */}
      {loading ? (
  <>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Set the minimum height to fill the viewport
      }}
    >
      <Spin
        indicator={<LoadingOutlined style={{ fontSize: 104 }} spin />}
        message="Processing the payment"
        spinning={loading}
      />
      <p style={{ marginTop: 16 , fontSize : '20px' }}> <b>Please wait while we process your payment...</b> </p>
    </div>
  </>
) : null}


      {/* Render success message if data state is true */}
      {data ? (
         <div
         style={{
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           justifyContent: 'center',
           minHeight: '100vh', // Set the minimum height to fill the viewport
         }}
       >
        <Result
          status="success"
          title="Successfully Purchased"
          subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        />
        </div>
      ) : null}
    </>
 );
}

export default Payment;
//
//In this updated code, I have added comments to explain the purpose of each part of the code. The comments should provide a clear and concise explanation of the code, which is important for your career..</s>