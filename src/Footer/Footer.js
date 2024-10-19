import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col md={6}>
            <h5>About MealApp</h5>
            <p>
              MealApp is your go-to destination for discovering delicious meals and culinary experiences from around the world. Join us in exploring the best recipes and food ideas!
            </p>
          </Col>
          <Col md={6} className="text-center">
            <h5>Follow Us</h5>
            <div style={socialIconsStyle}>
              <a href="#" style={iconStyle}><FaFacebook size={30} /></a>
              <a href="#" style={iconStyle}><FaTwitter size={30} /></a>
              <a href="#" style={iconStyle}><FaInstagram size={30} /></a>
              <a href="#" style={iconStyle}><FaLinkedin size={30} /></a>
            </div>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <p>&copy; {new Date().getFullYear()} MealApp. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#ff6f61', // Warna sama dengan hero
  color: '#ffffff',
  padding: '20px 0',
};

const socialIconsStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '15px', // Jarak antar ikon
};

const iconStyle = {
  color: '#ffffff', // Warna ikon
  textDecoration: 'none', // Menghilangkan garis bawah
};

export default Footer;
