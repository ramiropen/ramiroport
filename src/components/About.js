import React from "react";
import Accordion from "react-bootstrap/Accordion";



export default function About() {
  const wrapperStyle = {
    textAlign: "center",
    marginTop: "100px",
  };

  return (
    <div style={wrapperStyle} id="about">
      <h2>ABOUT</h2>
      <Accordion>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Skills</Accordion.Header>
          <Accordion.Body>
            <div>
          	Programming Languages: Javascript	
			      Web Front end: ReactJS, Redux, CSS, HTML, Bootstrap
			      Web Back end: Node, Express, MongoDB
			      Version Control: Git/ Github
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Work Experience</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>Education</Accordion.Header>
          <Accordion.Body>
           UNLV Full Stack Development Bootcamp: Graduating August 2022
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}