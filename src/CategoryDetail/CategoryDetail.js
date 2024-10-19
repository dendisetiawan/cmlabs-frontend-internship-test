import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


function CategoryDetail() {
  const { categoryName } = useParams(); 
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      .then(response => {
        setMeals(response.data.meals);
      })
      .catch(error => {
        console.error("There was an error fetching the meals!", error);
      });
  }, [categoryName]);

  return (
    
    <Container className="mt-5">
    
      <h2>Meals in Category: {categoryName}</h2>
      <Row>
        {meals && meals.length > 0 ? (
          meals.map(meal => (
            <Col md={3} key={meal.idMeal} className="mb-4">
              <Card className="text-center">
                <Card.Img 
                  variant="top" 
                  src={meal.strMealThumb} 
                  style={{ height: '200px', objectFit: 'cover' }} 
                />
                <Card.Body>
                  <Card.Title>{meal.strMeal}</Card.Title>
                  <Button variant="primary" as={Link} to={`/meal/${meal.idMeal}`} className="mt-3">
                    See Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No meals found for this category.</p>
        )}
      </Row>
    </Container>
  );
}

export default CategoryDetail;
