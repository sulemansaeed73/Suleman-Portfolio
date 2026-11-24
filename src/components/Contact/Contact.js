import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";
import Reveal from "../Motion/Reveal";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  buttonSpring,
} from "../Motion/MotionVariants";

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
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=sulemansaeed73@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`From: ${name}\n${message}`)}`;

    window.open(mailtoLink, "_blank");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactDetails = [
    {
      icon: <AiOutlineMail className="contact-icon" />,
      title: "Email",
      value: "sulemansaeed73@gmail.com",
    },
    {
      icon: <AiOutlinePhone className="contact-icon" />,
      title: "Phone",
      value: "+92 314 7367846",
    },
    {
      icon: <AiOutlineEnvironment className="contact-icon" />,
      title: "Location",
      value: "Lahore, Pakistan",
    },
  ];

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row>
          <Col md={12} className="contact-header">
            <Reveal variants={fadeInUp}>
              <h1 className="project-heading">
                Get In <strong className="purple">Touch</strong>
              </h1>
              <p className="contact-subheading">
                Feel free to reach out to me for any questions or opportunities!
              </p>
            </Reveal>
          </Col>
        </Row>

        <Row className="contact-content" style={{ alignItems: "flex-start", marginTop: "30px" }}>
          {/* Contact Information Cards */}
          <Col md={6} className="contact-info">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer(0.12, 0.1)}
            >
              {contactDetails.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInLeft}
                  whileHover={{ x: 8, borderColor: "#1e90ff" }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="contact-info-item"
                  style={{
                    cursor: "pointer",
                    transition: "box-shadow 0.2s ease, border-color 0.2s ease",
                  }}
                >
                  {item.icon}
                  <div>
                    <h3>{item.title}</h3>
                    <p style={{ margin: 0 }}>{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Col>

          {/* Contact Form */}
          <Col md={6} className="contact-form">
            <Reveal variants={fadeInRight}>
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
                    rows={5}
                    required
                  ></textarea>
                </div>
                <motion.button
                  variants={buttonSpring}
                  whileHover="hover"
                  whileTap="tap"
                  type="submit"
                  className="btn btn-primary btn-motion-primary"
                  style={{ width: "100%", marginTop: "10px" }}
                >
                  Send Message
                </motion.button>
              </form>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
