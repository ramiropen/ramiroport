import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from 'react-bootstrap/Stack'
import { BsLinkedin } from "react-icons/fa";
import { IconName } from "react-icons/ai";

export default function ContactMe() {
  const wrapperStyle = { textAlign: "center", marginTop: "100px" };

  return (
    <div style={wrapperStyle} id="contact">
        <div class="emailForm">
          <form class="emailTag" action="https://formspree.io/f/xpzbbpkl" method="POST">
           <h3 class="emailH3">GET IN TOUCH</h3> 
           <input class="emailInput" type="text" id="name" placeholder="Your Name" name="name"required></input>  
           <input class="emailInput" type="email" id="email" placeholder="Enter Email" name="email"required></input>  
           <input class="emailInput" type="text" id="phone" placeholder="Phone Number" name="phone"></input>        
           <textarea class="emailInput" id="message" rows="4" placeholder="Message" name="message"></textarea>
           <button class="emailButton" type="submit">Send Message</button>
          </form> 
        </div>
       
    </div>

  );
}