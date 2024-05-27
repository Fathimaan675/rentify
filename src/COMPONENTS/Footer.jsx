import React from 'react'
import { Link } from 'react-router-dom'
Link
function Footer() {
  return (
<>
<div className='bg-primary'style={{height:'200px',width:'100%'}}>
<div style={{height : '300px'}} className='container mt-5 w-100'>
          <div className="footer-content d-flex justify-content-between">
              <div style={{width : '400px'}} className="media mt-4">
                  <h5 className='d-flex'><i style={{height : '25px'}} className="fa-brands fa-renren"></i>Rendify</h5>
                  <p style={{textAlign : 'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia facere dolores sed explicabo maiores perspiciatis minus, vitae et.</p>
                  <span>Code Licensed MIT, docs CC BY 3.0</span><br />
                  <span>Currently v5.3.2</span>
              </div>
              <div className="links d-flex flex-column mt-4">
                  <h5>Links</h5>
                  <Link to={'/'} style={{textDecoration : 'none',color : 'white'}}>Login Page</Link>
                  <Link to={'/buyer'} style={{textDecoration : 'none',color : 'white'}}>view properties</Link>
              </div>
              <div className="guides d-flex flex-column mt-4">
                  <h5>Guides</h5>
                  <a href="https://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}>React JS</a>
                  <a href="https://reactrouter.com/en/main" target='_blank' style={{textDecoration: 'none',color: 'white'}}>React Routing</a>
                  <a href="https://react-bootstrap.github.io/" target='_blank' style={{textDecoration: 'none',color: 'white'}}>React Bootstrap</a>
              </div>
              <div className="contact mt-4">
                  <h5>Contact Us</h5>
                  <div className='d-flex'>
                      <input type="text" className='form-control me-1' placeholder='Email Id Please' />
                      <button style={{backgroundColor: '#60eb60',color: 'white'}} className='btn'><i class="fa-solid fa-arrow-right"></i></button>
                  </div>
                  <div className='icons d-flex justify-content-between mt-3'>
                      <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i className="fa-brands fa-twitter"></i></a>
                      <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i className="fa-brands fa-instagram"></i></a>
                      <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i className="fa-brands fa-facebook"></i></a>
                      <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i className="fa-brands fa-linkedin"></i></a>
                      <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i className="fa-brands fa-github"></i></a>
                      <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i className="fa-solid fa-phone"></i></a>
                  </div>
              </div>
          </div>
          <p className='text-center mt-5'>Copyright &copy; 2024 Rendify. Build with React.</p>
      </div>

</div>
</>
  )
}

export default Footer