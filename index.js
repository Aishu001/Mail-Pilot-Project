// import the several dependencies
import express from 'express'
import cors from 'cors';


import 'dotenv/config'
import bodyParser  from 'body-parser';
import { dataBaseConnection } from './dataBase.js';
import { userRouter } from './routes/user.js';
import { contactRouter } from './routes/contactList.js';
import { CampaignRouter } from './routes/sendEmail.js';


// import { isAuthorized } from './middleware/auth.js';



// server Setup 
const app = express();
const PORT = process.env.PORT

//  Database Connection
dataBaseConnection() 

// middlewares
app.use(bodyParser.json())
app.use(cors());

app.use('/user',userRouter)
app.use('/contact',contactRouter)
app.use('/campaign',CampaignRouter)



// listen the server
app.listen(PORT , () => {
    console.log(`Server is running in ${PORT}`);
})
