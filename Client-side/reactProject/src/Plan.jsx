import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cardcustom.css';
import { Link, useNavigate } from 'react-router-dom';
import Payment from './Payment';

function Plan() {
    const navigate  = useNavigate()
  const [cardsData, setCardData] = useState([
    {
      id: 1,
      title: 'Plus',
      price: '$9 /month',
      description: '$9',

      data: ['5 Users', '50GB Storage', 'Unlimited Public', 'Projects Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports']
    },
    {
      id: 2,
      title: 'Free',
      price: "$ 0/month",
      data: ['Single User', '50GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports']
    },
    {
      id: 3,
      title: 'Pro',
      price: '$49 /month',
      data: ['Unlimited Users', '50GB Storage', 'Unlimited Public', 'Projects Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports']
    }
  ]);

  

 

  return (
    <>
      <div className='cont'>
        {cardsData.map((card) => (
          <Card style={{ width: '18rem' }} id="card" key={card.id}>
            <Card.Body>
              <div id="head">
                <Card.Title>{card.title}</Card.Title>
                <h2 id="price">{card.price}</h2>
              </div>

              <div id="text">
                <Card.Text>
                  {card.data.map((list, index) => (
                    <ul key={index}>
                      <li id="lis">{list}</li>
                    </ul>
                  ))}
                </Card.Text>
              </div>
              {card.title === 'Free' ? (
  <Button id="btn" variant="primary">
    Open
  </Button>
) : (
  <Link to={`/paymentMode/${card.title}/${card.description}`}>
  <Button id="btn" variant="primary">
    Subscribe
  </Button>
</Link>

)}

            </Card.Body>
          </Card>
        ))}
      </div>
   
    </>
  );
}

export default Plan;
