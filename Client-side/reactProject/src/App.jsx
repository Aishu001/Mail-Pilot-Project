import { useState } from 'react'
import './App.css'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom"
import SignIn from './SignIn'
import Login from './Login'
import Dashboard from './Dashboard'
import Contact from './Contact'
import AddContact from './AddContact'
import EditContact from './EditContact'
import Campaign from './Campaign'
import Plan from './Plan'
import Payment from './Payment'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Router>
     <Routes>
     <Route path="/" element={<Home/>} />
              <Route path ="/signup" exact Component={SignIn} ></Route>
              <Route path ="/login" exact Component={Login} ></Route>   
              <Route path ="/dashboard" exact Component={Dashboard} ></Route>    
              <Route path ="/contact" exact Component={Contact} ></Route>  
              <Route path ="/AddContact" exact Component={AddContact} ></Route>    
              <Route path ="/UpdateContact/:id" exact Component={EditContact} ></Route> 
              <Route path ="/campaign" exact Component={Campaign} ></Route> 
              <Route path ="/plan" exact Component={Plan} ></Route> 
              <Route path="/paymentMode/:title/:price" exact Component={Payment} />


            </Routes>
     </Router>
    
    </>
  )
}

export default App
