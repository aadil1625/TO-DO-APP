import React,{useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import List from './List';
import Image from './Assets/sideimg.png'; 
import './CSS/Login.css';
import Signup from './Signup';




export default function Login() {

    const[email,setEmail]=useState('');
    const[name,setName]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState('');
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (event) =>{

        event.preventDefault();
        try{
            const response=await axios.post('http://localhost:4000/login',{
                email,
                password
            });

            if(response.data.status===true) {
               
              navigate(`/todo-page`);

            }else{
                setError('Invalid name or password');
            }
        }catch(error) {
            setError('An error occured while trying to logged in');
        }


    };

  return (
    <div className="signup-container">
      
    
    <form onSubmit={handleSubmit} >
    <div className="signup-form">
      <h1>Login</h1>
     
        <div className="form-group">
          <label>Email</label>
          <input type="email" id='email' value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter your email" required />
        </div>
       
        <div className="form-group">
          <label>Password</label>
          <input type="password" id='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" required />
        </div>
       
       
        <button type="submit" className="signup-button">Login</button>
      
      <p className='login-para'>Don't Have Account ? <Link to="/signup">Signup</Link></p>
    </div>
    </form>
      
      {error}
  </div>




   
  )
}
