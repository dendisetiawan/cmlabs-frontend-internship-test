import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function MealDetail() {
  const { mealId } = useParams(); 
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then(response => {
        setMeal(response.data.meals[0]); 
      })
      .catch(error => {
        console.error("There was an error fetching the meal details!", error);
      });
  }, [mealId]);

  if (!meal) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <img 
            src={meal.strMealThumb} 
            alt={meal.strMeal} 
            style={{ width: '100%', height: 'auto' }} 
          />
        </Col>
        <Col md={6}>
          <h2>{meal.strMeal}</h2>
          <p><strong>Category:</strong> {meal.strCategory}</p>
          <p><strong>Area:</strong> {meal.strArea}</p>
          <p><strong>Instructions:</strong> {meal.strInstructions}</p>
          <Button variant="primary" href={meal.strYoutube} target="_blank">
            Watch on YouTube
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MealDetail;
