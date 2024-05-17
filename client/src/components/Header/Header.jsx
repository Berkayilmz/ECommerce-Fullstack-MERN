import React from 'react'
import './header.css'
import { Container, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom' // NavLink'i doğru kütüphaneden import ediyoruz
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import {motion} from 'framer-motion'

const Header = () => {
  const nav_links = [
    {
      path: 'home',
      display: 'Home'
    },
    {
      path: 'shop',
      display: 'Shop'
    },
    {
      path: 'cart',
      display: 'Cart'
    },
  ]

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Aydemirler Mobilya</h1>
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav_active' : ''}>
                      {item.display}
                    </NavLink>
                    {console.log(`${item.path}`)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav_icons">
              <span className='fav_icon'>
                <i className="ri-heart-line"></i>
                <span className="badge">2</span>
              </span>
              <span className='cart_icon'>
                <i className="ri-shopping-cart-2-line"></i>
                <span className="badge">3</span>
              </span>
              <span>
                <motion.img whileTap={{scale:1.2}} src={userIcon} alt="" />
              </span>
            </div>

            <div className="mobile_menu">
              <span>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header