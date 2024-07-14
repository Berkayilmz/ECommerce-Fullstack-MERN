import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./footer.css";

import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  List,
} from "reactstrap";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="3">
            <div className="logo">
              <div>
                <h1 className="text-white">Aydemirler Mobilya</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              molestiae consequatur aspernatur laboriosam iure sunt earum,
              quaerat dolore blanditiis voluptatibus.
            </p>
          </Col>

          <Col lg="3" className="mb-4" md="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Kategoriler</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <List to="#">Mobile Phones</List>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <List to="#">Modern Sofa</List>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <List to="#">Arm Chair</List>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <List to="#">Smart Watches</List>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <List to="#">Shop</List>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <List to="#">Cart</List>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <List to="#">Login</List>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <List to="#">Privacy Policy</List>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="1" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Bize Ulaşın</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>123,Aydın</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>5546654433</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>dogukan@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} devoloped by berkay&kadir. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
