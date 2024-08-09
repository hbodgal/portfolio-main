import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import streetsmart from "../../Assets/Projects/streetsmart.png";
import titanbuddy from "../../Assets/Projects/titanbuddy.jpeg";
import csufmap from "../../Assets/Projects/csufmap.png";
import eventocity from "../../Assets/Projects/eventocity.png"
import postathought from "../../Assets/Projects/postathought.png"
import ticketingapp from "../../Assets/Projects/ticketingApp.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Some <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticketingapp}
              isBlog={false}
              title="Ticketing App"
              description="
              Engineered a full-stack Next.js web app to purchase tickets in real time, have server-side components for fast processing. Built on Microservices, utilizing NATS and Google Cloud, handles concurrency issues, payment issues, uses worker service.
"
              ghLink="https://github.com/hbodgal/ticketing-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={postathought}
              isBlog={false}
              title="PostAThought"
              description="PostAThought is a social app built using React.js with ability to post text content, comment, and content moderation. This project implements a microservices architecture using Node.js and Express, orchestrated with Kubernetes (K8s) and managed with Skaffold. It utilizes an event-driven approach for communication between services."
              ghLink="https://github.com/hbodgal/Post-a-thought"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventocity}
              isBlog={false}
              title="EventOCity"
              description="A content website to view all the events of the city at one place. Buit using Next.js, Postgres with Prisma and Tailwind CSS. This app utilizes next.js features like Suspense, Skeleton, fetch memoization etc."
              ghLink="https://github.com/hbodgal/eventocity"
              demoLink="https://eventocity.vercel.app/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={titanbuddy}
              isBlog={false}
              title="Titan Buddy"
              description="
              Titan Buddy is All-In-One solution to increase student collaboration and engagement on CSUF Campus. The app revolutionizes the student journey by providing a social chat feature for peer connections, real-time event listings for staying updated, integrated CSUF Maps for seamless campus exploration, and push notifications for instant alerts, enhancing the overall campus experience. THis app is built using React Native and Nest JS."
              ghLink="https://github.com/hbodgal/titanBuddy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={csufmap}
              isBlog={false}
              title="CSUF Map (PWA)"
              description="React-powered CSUF Map Progressive Web Application is a game-changer, marking 100+ spots on campus with Leaflet’s slick mapping. Easy building searches, even offline! PWAs rock with their app-like feel, lightning-fast loads, and cross-device magic. Leaflet’s customization makes navigating a breeze. It’s all about giving CSUF a smooth, cool, and user-friendly map experience for everyone, from students to faculty to visitors—no fuss, just fun exploration!"
              ghLink="https://github.com/hbodgal/CSUF-Maps"
              demoLink="https://hbodgal.github.io/CSUF-Maps/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={streetsmart}
              isBlog={false}
              title="Street Smart"
              description="This cool app is powered by Chat GPT APIs to suggest location based on precisely qurated prompts, developed during TitanHacks 2023 (24Hrs coding challenge at CSUF), not only notifies users about nearby must-visit places but also uses cutting-edge live tracking and real-time notifications. When users venture beyond a 5-mile radius from their last location, ChatGPT API kicks in with preset prompts, guiding them to hidden gems nearby. It’s like having a personal tour guide right in your pocket, making every journey an adventure!"
              ghLink="https://github.com/hbodgal/streetSmart"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
