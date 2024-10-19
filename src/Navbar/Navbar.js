import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Spinner from 'react-bootstrap/Spinner';
// import Breadcrumb from 'react-bootstrap/Breadcrumb'; 
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';

function ColorSchemesExample() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        console.log(response.data);  
        setMeals(response.data.categories); 
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">MealApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
          <Navbar.Collapse id="basic-navbar-nav"> 
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#foods">Foods</Nav.Link>
              <Nav.Link href="#ingredients">Ingredients</Nav.Link>
              <Nav.Link href="#culinary">Local Culinary</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={heroStyle}>
        <Container>
         
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <FaUtensils size={60} style={{ color: '#343a40', marginBottom: '20px' }} />
              <h1>Welcome to MealApp</h1>
              <p>
                Discover delicious meals and culinary experiences from around the world. Explore categories, find new recipes, and enjoy our curated list of the best dishes!
              </p>
              <Button variant="dark" href="#meal-list">Explore Meals</Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Container id="meal-list" className="mt-5">
      {/* <Spinner animation="border" variant="primary" /> */}
        <Row>
          {meals.map(meal => (
            
            <Col xs={6} md={3} key={meal.idCategory} className="mb-4"> 
              <Card className="text-center">
                <Card.Img 
                  variant="top" 
                  src={meal.strCategoryThumb} 
                  style={{ height: '200px', width: '100%', objectFit: 'cover' }} 
                />
                <Card.Body>
                  <Card.Title>{meal.strCategory}</Card.Title>
                  {/* <Card.Text>{meal.strCategoryDescription.substring(0, 100)}...</Card.Text> */}
                  <Button variant="primary" as={Link} to={`/category/${meal.strCategory}`} className="mt-3">  See More</Button>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

const heroStyle = {
  backgroundColor: '#ff6f61',
  color: '#343a40',
  padding: '100px 0',
  textAlign: 'center',
};

export default ColorSchemesExample;
