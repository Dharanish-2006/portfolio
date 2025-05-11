import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cook from "../../Assets/Projects/cook.jpg";
import ams from "../../Assets/Projects/ams.jpg";
import CollabX from "../../Assets/Projects/collabX.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CollabX}
              isBlog={false}
              title="Collab X"
              description="A platform where users can share their business Ideas build using NODE JS and MongoDB Socketio"
              ghLink="https://github.com/Dharanish-2006/CollabX"
              demoLink="https://chat-app-v3-stb8.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cook}
              isBlog={false}
              title="SB recicpes"
              description="An Recipe app for cooks built using MERN Stack"
              ghLink="https://github.com/Dharanish-2006/cook"
              demoLink="https://cook-hazel.vercel.app/"              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ams}
              isBlog={false}
              title="Attendance Management System"
              description="An attendance Management system that mainntains your data locally"
              ghLink="https://github.com/Dharanish-2006/attendance-management-system"
              demoLink="https://dharanish-2006.github.io/attendance-management-system/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
