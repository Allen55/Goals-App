import { useState, useEffect } from 'react'
import {FaSignInAlt} from "react-icons/fa";


function Login() {

  const [formData, setFormData] = useState({
      
      email: "",
      password: "",
    
  })

  const {email, password } = formData;

  const onChange = (e) => {
    const { name } = e.target.name;
    setFormData((prevState) => ({
        ...prevState,
        name: e.target.value,
    }))
  }
  console.log(formData)

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
    <section className="heading">
      <FaSignInAlt /> Login
      <p>Login and start setting goals</p>
      <section className="form">
          <form onSubmit={onSubmit}>          
            <div className="form-group">
                <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    value={email} 
                    placeholder="Enter your email" 
                    onChange={onChange}   
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="password" 
                    value={password} 
                    placeholder="Enter password" 
                    onChange={onChange}   
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-block">Submit</button>
            </div>
          </form>
      </section>
    </section>
    </>
  )
}

export default Login