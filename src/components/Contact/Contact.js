import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  const { name, subject, message } = formData;
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=sulemansaeed73@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `From: ${name}\n${message}`
  )}`;

  window.open(mailtoLink, "_blank");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row>
          <Col md={12} className="contact-header">
            <h1 className="project-heading">
              Get In <strong className="purple">Touch</strong>
            </h1>
            <p className="contact-subheading">
              Feel free to reach out to me for any questions or opportunities!
            </p>
          </Col>
        </Row>
        <Row className="contact-content">
          <Col md={6} className="contact-info">
            <div className="contact-info-item">
              <AiOutlineMail className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>sulemansaeed73@gmail.com</p>
              </div>
            </div>
            <div className="contact-info-item">
              <AiOutlinePhone className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <p>+92 314 7367846</p>
              </div>
            </div>
            <div className="contact-info-item">
              <AiOutlineEnvironment className="contact-icon" />
              <div>
                <h3>Location</h3>
                <p>Lahore, Pakistan</p>
              </div>
            </div>
          </Col>
          <Col md={6} className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact; 