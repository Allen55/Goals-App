import { useState, useEffect } from 'react'
import {FaUser} from "react-icons/fa";


function Register() {

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      password2: ""
  })

  const {name, email, password, password2} = formData;

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
      <FaUser /> Register
      <p>Please create an account</p>
      <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    value={name} 
                    placeholder="Enter your name" 
                    onChange={onChange}   
                />
            </div>
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
                <input 
                    type="text" 
                    className="form-control" 
                    id="password2" 
                    value={password2} 
                    placeholder="Confirm password" 
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

export default Register