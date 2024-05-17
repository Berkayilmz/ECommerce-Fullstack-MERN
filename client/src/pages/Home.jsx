import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import {Container,Row,Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

import '../styles/home.css'

const Home = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <Helmet title={'Home'}>
        <section className="hero_section">
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className="hero_content">
                  <p className="hero_subtitle">{year} yılının trend ürünleri</p>
                  <h2>Daha Minimalist & Daha Modern</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni odit veritatis modi sint iusto autem tempora, consequatur, repellendus dolore consequuntur praesentium nulla. Sapiente sit, quas esse quos distinctio nemo voluptates.</p>
                  <motion.button whileTap={{scale:1.2}} className="shop_btn">
                    <Link to='/shop'>SATIN AL</Link>
                  </motion.button>
                </div>
              </Col>
              <Col lg='6' md='6'>
                <div className="hero_img">
                  <img src={heroImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default Home