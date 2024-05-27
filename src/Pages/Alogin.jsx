import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI } from '../services/allAPI';

function Alogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await loginAPI({ email, password });
      if (result.status === 200) {
        alert('Login successful!');
        const userRole = result.data.role;
        if (userRole === 'seller') {
          navigate('/seller');  // Replace with your seller page path
        } else if (userRole === 'buyer') {
          navigate('/buyer');  // Replace with your buyer page path
        }
      } else {
        alert('Invalid email or password!');
      }
    } catch (err) {
      console.error(err);
      alert('Login failed! Please try again.');
    }
  };


  return (
    <>
      <div style={{ width: '100%', height: '100vh' }} className="d-flex justify-content-center align-items-center">
        <div className="container w-75">
          <Link to='/' style={{ textDecoration: 'none' }} className='fw-bolder'>
            <i className="fa-solid fa-arrow-left"></i> Back to Home
          </Link>
          <div className="card shadow p-5">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img className='w-100' src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="Authentication" />
              </div>
              <div className="col-lg-6">
                <h1 className='fw-bolder mt-2'>
                  <i className="fa-brands fa-docker"></i> Project Fair
                </h1>
                <h5 className='fw-bolder mt-2'>
                  Sign in to your Account
                </h5>
                <Form>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FloatingLabel>
                </Form>
                <div className="mt-3">
                  <button onClick={handleLogin} style={{color: 'white', border: 'none' }} className='btn btn-primary'>
                    Login
                  </button>
                  <p>New User? Register as a <Link className='text-info' to={'/register/buyer'}>Buyer</Link> or <Link className='text-info' to={'/register/seller'}>Seller</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Alogin;