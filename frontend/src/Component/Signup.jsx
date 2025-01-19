import React,{useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import './CSS/Signup.css';
import Image from './Assets/sideimg.png'; 
import Footer from './Footer';
//import Emplist from './Emplist';




export default function Signup() {


    const [formData , setFormData] = useState({
        name : '',
        email : '',
        password : '',
        phone : '',
    });
    const navigate = useNavigate();

    // const[name,setname]=useState('');
    // const[email,setEmail]=useState('');
    // const[password,setPassword]=useState('');
    // const[phone,setPhone]=useState('');

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
       });
    };
    

    const handleSubmit = async (event) =>{

        event.preventDefault();
        try{
            console.log(formData);
            const response=await axios.post('http://localhost:4000/signup',formData)
        

            if(response.data.success) {
                console.log('Signup Successful');
                navigate(`/todo-page`);


            }else{
                console.error('Signup Failed');
            }
        }catch(error) {
            console.error('Error:',error);
        }


    };

  return (
    <>    <div className="signup-container">
    <div className="signup-image">
      <img src={Image} className="sideimg" alt="Signup Background" />
    </div>
    <div className="signup-form">
      <h1>Create an account.</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>Name</label>
          <input type="text"  name="name" value={formData.name}
            onChange={handleChange} placeholder="Enter your Full Name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email}
            onChange={handleChange} placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input type="text"  name="phone" value={formData.phone}
            onChange={handleChange} placeholder="Enter your Phone No." required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password"   name="password" value={formData.password}
            onChange={handleChange} placeholder="Enter your password" required />
        </div>
       
        <Link to="/todo-page">
        <button type="submit" className="signup-button">Sign Up</button>
        </Link>
      </form>
      <p className='login-para'>Already have an account? <a href="/login">Login here.</a></p>
    </div>
  </div>

  <Footer/>

  </>
  );
}

