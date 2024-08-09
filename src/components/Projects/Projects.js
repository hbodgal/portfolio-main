import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import streetsmart from "../../Assets/Projects/streetsmart.png";
import titanbuddy from "../../Assets/Projects/titanbuddy.jpeg";
import csufmap from "../../Assets/Projects/csufmap.png";
import eventocity from "../../Assets/Projects/eventocity.png"
import postathought from "../../Assets/Projects/postathought.png"
import ticketingapp from "../../Assets/Projects/ticketingApp.png"
import word_analytics from "../../Assets/Projects/Word_Analytics.png"
import taskbag from "../../Assets/Projects/Taskbag.png"
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
              Full-stack Next.js web app for real-time ticket purchasing with microservices, server-side processing, and worker services. Integrated Payment gateway and handles concurrency issues, payment issues and error handling complexities."
              Technologies="Next.js, Express.js, NATS, Google Cloud Platform, Worker Services, Stripe, Kubernetes, Docker"
              aim="Understand microservices and challanges in depth."
              ghLink="https://github.com/hbodgal/ticketing-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={postathought}
              isBlog={false}
              title="PostAThought"
              description="PostAThought is a social app that allows users to post text content, comment on posts, and includes content moderation features. Implements microservices orchestrated with Kubernetes (K8s), managed with Skaffold and utilizes an event-driven approach."
              Technologies="React.js, Zustand, Express.js, Node.js, Kubernetes, Skaffold"
              aim="Use Kubernetes, Docker, Skaffold and implement event driven communication."
              ghLink="https://github.com/hbodgal/Post-a-thought"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventocity}
              isBlog={false}
              title="EventOCity"
              description="A content website to view all the events of the city at one place. This app utilizes next.js features like Suspense, Skeleton, fetch memoization."
              Technologies="Next.js, Tailwind CSS, Postgres, Prisma, Vercel"
              aim="Built to practice UI development using Next.js and Tailwind CSS "
              ghLink="https://github.com/hbodgal/eventocity"
              demoLink="https://eventocity.vercel.app/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskbag}
              isBlog={false}
              title="Task Bag"
              description="Task Bag is Task Management app. it use localstorage to store data locally in the browser which helps you to keep it personalize and localized. It has been improvised to give best performance and with the best coding practices to reduce computation as much as possible."
              Technologies="React, Zustand, Local Storage, Netlify"
              aim="Created for personal use"
              ghLink="https://github.com/hbodgal/TaskBag"
              demoLink="https://taskbag.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={titanbuddy}
              isBlog={false}
              title="Titan Buddy"
              description="
              Titan Buddy is All-In-One solution to increase student collaboration and engagement on CSUF Campus. The app revolutionizes the student journey by providing a social chat feature for peer connections, real-time event listings for staying updated, integrated CSUF Maps for seamless campus exploration, and push notifications for instant alerts, enhancing the overall campus experience."
              Technologies="React Native, NestJS, CSS, MySQL"
              aim="Masters' Final Year Project"
              ghLink="https://github.com/hbodgal/titanBuddy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={csufmap}
              isBlog={false}
              title="CSUF Map (PWA)"
              description="CSUF Map, a Progressive Web Application is a game-changer, marking 100+ spots on campus with Leaflet’s slick mapping. Easy building searches, even offline. It’s all about giving CSUF a smooth, cool, and user-friendly map experience for everyone, from students to faculty to visitors—no fuss, just fun exploration!"
              Technologies="React, Leaflet, Github Pages"
              aim="Created for personal use"
              ghLink="https://github.com/hbodgal/CSUF-Maps"
              demoLink="https://hbodgal.github.io/CSUF-Maps/"
            />
          </Col>

          
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={word_analytics}
              isBlog={false}
              title="Word Analytics"
              description="This app provides insights into text by counting words, characters and shows allowed limits for popular social media platforms. This app is created using React Vite and uses Prettier for code formatting."
              Technologies="React, CSS, Prettier, Github Pages"
              aim="Created for personal use"
              ghLink="https://github.com/hbodgal/word-analytics/"
              demoLink="https://hbodgal.github.io/word-analytics/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={streetsmart}
              isBlog={false}
              title="Street Smart"
              description="This cool app is powered by Chat GPT APIs to suggest location based on precise prompts. It uses live tracking to notifies users about nearby must-visit places. When users venture beyond a 5-mile radius from their last location, ChatGPT API kicks in with preset prompts, guiding them to hidden gems nearby. It’s like having a personal tour guide right in your pocket, making every journey an adventure!"
              Technologies="Dart, Flutter, Chat GPT"
              aim="TitanHacks 2023 (24Hrs coding challenge)"
              ghLink="https://github.com/hbodgal/streetSmart"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={streetsmart}
              isBlog={false}
              title="Street Smart"
              description="This cool app is powered by Chat GPT APIs to suggest location based on precisely qurated prompts, developed during TitanHacks 2023 (24Hrs coding challenge at CSUF), not only notifies users about nearby must-visit places but also uses cutting-edge live tracking and real-time notifications. When users venture beyond a 5-mile radius from their last location, ChatGPT API kicks in with preset prompts, guiding them to hidden gems nearby. It’s like having a personal tour guide right in your pocket, making every journey an adventure!"
              aim=""
              ghLink="https://github.com/hbodgal/streetSmart"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
