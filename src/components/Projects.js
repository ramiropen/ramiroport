import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Carousel from 'react-bootstrap/Carousel'

// import { useSelector } from "react-redux"; // gets data from the store
// import { useDispatch } from "react-redux"; // updates the store data
// import { changeColor } from "../store/colorStore"; // updates the store data

export default function Projects() {
  // vanilla js section
  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
  };

  // const dispatch = useDispatch(); // send info (a.k.a. "state") to the store
  // const color = useSelector((state) => state.colorStore.color); // get initial value from store

  // jsx section
  return (
    <div style={wrapperStyle} id="projects">
      <h2>PROJECTS</h2>  


       {/*--------CAROUSEL-------------  */}
      <Carousel class="carousel">
        <Carousel.Item interval={5000}>
          <img
            className="crossword"
            src="http://placekitten.com/700/700"
            alt="yeth"
          />
          <Carousel.Caption>
            <h3>Crossword Puzzle</h3>
            <p>This is my first solo project. Object was to create a mini game.</p>
            <a class="proBut1" href="https://90scrossword.netlify.app" >Try my Game</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="http://placekitten.com/700/700"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="http://placekitten.com/700/700"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* ----------CARDS--------------- */}
      <div class="cards">
      <CardGroup>
        {/* 1ST PROJECT */}
        <Card class="bottomCards">
          <Card.Img variant='top' src='holder.js/100px160' />
          <Card.Body>
          <Card.Title>Crossword Puzzle</Card.Title>
          <Card.Text>
          This is my first solo project. Object was to create a mini game.
          </Card.Text>
          <a class="proBut1" href="https://90scrossword.netlify.app" >Try my Game</a>
          </Card.Body>
          <Card.Footer>
          <small>HTML, CSS, Javascript, Deployed on Netlify</small>
          </Card.Footer>
        </Card>

        {/* 2ND PROJECT */}
        <Card class="bottomCards">
          <Card.Img variant='top' src='holder.js/100px160' />
          <Card.Body>
          <Card.Title>Payroll Portal</Card.Title>
          <Card.Text>This app creates users and generates printable reports</Card.Text>
          <a class="proBut1" href="https://90scrossword.netlify.app" >Try my Game</a>
          </Card.Body>
          <Card.Footer>
          <small>ReactJS, MongoDB, CSS, and Bootstrap</small>
          </Card.Footer>
        </Card>
        
        {/* 3RD PROJECT */}
          <Card class="bottomCards">
          <Card.Img variant='top' src='holder.js/100px160' />
          <Card.Body>
          <Card.Title>Marketing Website</Card.Title>
          <Card.Text>
          This app allows users to comment, and add items to a shopping cart action.
          </Card.Text>
          <a class="proBut1" href="https://90scrossword.netlify.app" >Try my Game</a>
          </Card.Body>
          <Card.Footer>
          <small>ReactJS, MongoDB, CSS, and Bootstrap</small>
          </Card.Footer>
          </Card>
        </CardGroup>
        </div>
      </div>
    );
  }
