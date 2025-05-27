import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My Name is <span className="purple">Suleman Saeed </span>
            <br /> I am a graduate with a Bachelor of Science in Software Engineering from the University of Central Punjab. 
            I am proficient in multiple programming languages and frameworks, including React, Next.js, Laravel, Django 
            and MERN Stack.
            <br />
            I am passionate about creating efficient and responsive web applications and excited to find opportunities 
            to contribute my skills to innovative projects.
            I have a strong ambition to keep learning and work on projects that help me grow.
            <br />
            <br />
            Other Skills apart from Website Development are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Website Hosting
            </li>
            <li className="about-activity">
              <ImPointRight /> Technical Writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Web Scraping
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
