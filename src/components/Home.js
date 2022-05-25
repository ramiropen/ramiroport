import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <Card>
      <Card.Img variant='top' src='holder.js/100px180' />
      <Card.Body>
        <Card.Title>Ramiro Peña</Card.Title>
        <Card.Text>Full Stack Developer</Card.Text>
        <Button href="public\images\res_test_2.jpg" variant='primary'>Resume</Button> 
       
      </Card.Body>
    </Card>
  );
}