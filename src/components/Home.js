import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import RESUME from "../assests/RESUME.pdf";



export default function Home() {
  const wrapperStyle = { textAlign: "center", marginTop: "100px" };

  return (
    <div style={wrapperStyle} id="home" class="home">
    <Card>
      <Card.Img variant='top' src='holder.js/100px180' />
      <Card.Body>
        <Card.Title>!!!!Ramiro Peña Cant wait any longer to apply, this portfolio is in the beginning phases!!!!!</Card.Title>npm start

        <Card.Text>Full Stack Developer</Card.Text>
      <Button href={RESUME}>RESUME</Button>
      </Card.Body>
    </Card>
    </div>
  );
}