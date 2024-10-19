import React from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import { Link } from 'react-router-dom';

function Breadcrumbs() {
  return (
    <Container>
      <Breadcrumb style={{ marginTop: '-rem' }}>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
            <Breadcrumb.Item active>Meals</Breadcrumb.Item>
          </Breadcrumb>
    </Container>
  );
}

export default Breadcrumbs;
