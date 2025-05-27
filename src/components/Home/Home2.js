import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span className="purple"> Me </span>
            </h1>
            <p className="home-about-body">
            My Name is <span className="purple">Suleman Saeed </span>
            <br /> I am a graduate with a Bachelor of Science in Software Engineering from the University of Central Punjab. 
            I am proficient in multiple programming languages and frameworks, including React, Next.js, Laravel, 
            and the MERN Stack.
            <br />
            I am passionate about creating efficient and responsive web applications and excited to find opportunities 
            to contribute my skills to innovative projects.
            I have a strong ambition to keep learning and work on projects that help me grow.
      
              <br />
            
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={require('../../images/avatar.svg')} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sulemansaeed"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sulemansaeed73/"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/habibispeaks"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
