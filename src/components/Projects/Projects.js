import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Virtual_Attendance_management_System from "../../Assets/Projects/Virtual_Attendance_management_System.png";
import DigitalClock from "../../Assets/Projects/DigitalClock.png";
import bitsOfCode from "../../Assets/Projects/Weather-Application.png";

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
              imgPath={DigitalClock}
              isBlog={false}
              title="DigitalClock"
              description="Developed a dynamic digital clock using HTML, CSS, and JavaScript. It accurately fetches and displays the current time, showcasing real-time updates in an aesthetically pleasing interface."
              ghLink=""
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather-Application"
              description="Developed a Weather Application using HTML, CSS and JavaScript. It usage weather map API to fetch real time data and provide various type of Weather information like humidity, wind per hour speed, Weather condition (rainy, cloudy, storm etc.), real time temprature as well as country flag."
              ghLink=""
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Virtual_Attendance_management_System}
              isBlog={false}
              title="Virtual_Attendance_management_System"
              description="Developed an web application for personalized virtual Attendance, leveraging scalable backend architecture. Implemented secure user authentication and data storage with MySQL, enhancing user trust and experience. Result: Improved user experience by providing dynamic Application and notified by mail services."
              ghLink=""
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
