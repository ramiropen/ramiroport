import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



export default function Home() {
  const wrapperStyle = { textAlign: "center", marginTop: "100px" };

  return (
    <div id="home" class="home">
    <Card>
      <Card.Img variant='top' src='holder.js/100px180' />
      <Card.Body>
        <Card.Title>Ramiro Peña</Card.Title>
        <Card.Text>Full Stack Developer</Card.Text>
        <Button  src="public\images\res_test_2.jpg" href="public\images\res_test_2.jpg" variant='primary'>Resume</Button> 
       
      </Card.Body>
    </Card>
    </div>
  );
}