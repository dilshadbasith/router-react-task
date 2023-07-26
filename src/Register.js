import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';


function Register() {
    const navigate=useNavigate()
  return (
    <div className="parent" >
     <h1 className="heading">Register</h1>
       <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" placeholder="Enter your name" />
          <br />
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="number" placeholder="Enter your Mobile number" />
          <br />
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-muted">
          Already Have an Account?<span className='bt' onClick={()=>navigate("/login")}>Login</span>
        </Form.Text>
        <br />
        <Button variant="primary" onClick={()=>navigate('/login')}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Register
