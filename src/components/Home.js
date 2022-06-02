import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Testtesttest from "../assests/Testtesttest.pdf"



export default function Home() {
  const wrapperStyle = { textAlign: "center", marginTop: "100px" };

  return (
    <div style={wrapperStyle} id="home" class="home">
    <Card>
      <Card.Img variant='top' src='holder.js/100px180' />
      <Card.Body>
        <Card.Title>Ramiro Peña</Card.Title>
        <Card.Text>Full Stack Developer</Card.Text>
      <Button href={Testtesttest}>dfg</Button>
      </Card.Body>
    </Card>
    </div>
  );
}