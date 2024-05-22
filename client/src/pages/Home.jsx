import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import products from '../assets/data/products'

import Helmet from '../components/Helmet/Helmet'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'

import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList'

import Clock from '../components/UI/Clock'

import counterImg from '../assets/images/counter-timer-img.png'

const Home = () => {

  const year = new Date().getFullYear()

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === 'chair'
    )

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === 'sofa'
    )

    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
  }, [])

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
                  <motion.button whileTap={{ scale: 1.2 }} className="shop_btn">
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
        <Services />
        <section className="trending_products">
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2 className='section_title'>Trend Ürünler</h2>
              </Col>
              <ProductsList data={trendingProducts} />
            </Row>
          </Container>
        </section>

        <section className="best_sales">
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2 className="section_title">Çok Satanlar</h2>
              </Col>
              <ProductsList data={bestSalesProducts} />
            </Row>
          </Container>
        </section>

        <section className="timer_count">
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className="clock_top-content">
                  <h4 className='text-white fs-6 mb-2'>Sınırlı süre için</h4>
                  <h3 className='text-white fs-5 mb-3'>Kaliteli Ürünler</h3>
                </div>
                <Clock/>

                <motion.button whileTap={{scale:1.2}} className="shop_btn store_btn"><Link to={'/shop'}>Mağazayı Ziyaret Edin</Link></motion.button>
              </Col>

              <Col lg='6' md='6' className='text-end'>
                <img src={counterImg} alt="" />
              </Col>
            </Row>
          </Container>
        </section>

      </Helmet>

    </>
  )
}

export default Home