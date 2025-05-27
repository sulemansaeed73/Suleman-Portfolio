import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ProjectListing from "../Projects/ProjectListing";
function Projects() {
  return (
    <Container fluid className="project-section">
      <ProjectListing />
      <Particle />

    </Container>
  );
}

export default Projects;
