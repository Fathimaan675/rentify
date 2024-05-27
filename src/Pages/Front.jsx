import React from 'react'
import Header from '../COMPONENTS/Header'
import Footer from '../COMPONENTS/Footer'
import { Container,Row,Col } from 'react-bootstrap'
import '../CSS/front.css'
import { Button } from 'bootstrap'
import { Link } from 'react-router-dom'
import Msnimg from '../COMPONENTS/Image gallery/Msnimg'

function Front() {
  return (<>
   <Header/>
   <div className='w-100 d-flex justify-content-center align-items-center rounded ' style={{height:'100vh'}}>
        <div className='container'>
        <section>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='hero_content '>
                                <div className='hero_subtitle d-flex align-items-center'>
                                    <img style={{ height: '250px', width: '800px' }} src="https://uploads-ssl.webflow.com/5894a32730554b620f7bf36d/5e836b44bc2165727bdb190b_5bea09d1918c7c6ad1c2e033_Why-Offering-3D-Rendered-Interior-Design-to-Clients-is-Becoming-a-Standard-EASY-RENDER.jpeg" alt="" />
                                </div>
                                <h1 style={{ fontSize: '40px' }}>BUY AND  <span className='highlight' style={{ color: '#FFA500' }}>SELL</span></h1>
                                <p style={{ fontSize: '15px' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse neque blanditiis magni nihil at dolor consectetur harum hic asperiores consequuntur quasi illum aut quas, repudiandae assumenda libero ex eos corrupti.</p>
                            </div>
                        </Col>

                        <Col lg={2}>
                            <br />
                            <div className='home_img_box mt-1'>
                                <img src="https://rapidrenderingbrisbane.com.au/wp-content/uploads/2022/01/How-much-does-it-cost-to-render-a-house-1536x909.jpg" alt="" />
                            </div>
                        </Col>
                        <Col lg={2}>
                            <br />
                            <div className='home_img_box mt-4'>
                                <img src="https://tse2.mm.bing.net/th?id=OIP.3dBanihHwx28zUP0VP6RnAHaDt&pid=Api&P=0&h=180" alt="" />
                            </div>
                        </Col>
                        <Col lg={2}>
                            <br />
                            <div className='home_img_box mt-5'>
                                <img src="https://i.ytimg.com/vi/ceueWf88Hgc/maxresdefault.jpg" alt="" />
                            </div>
                        </Col>
                      
                    </Row>
                </Container>
                <button className='btn primary_btn'>
  <h4  style={{textDecoration:'none'}}> <a style={{textDecoration:'none'}} href="/Register"> to Click to explore</a>  <i class="fa-solid fa-arrow-right"></i></h4>
</button>
            </section>
        </div>
    </div>
    <Msnimg/>
    <Footer/>
  </>
   
  )
}

export default Front