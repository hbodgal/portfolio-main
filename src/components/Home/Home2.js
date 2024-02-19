import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avataaars.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <br />
            <br />
            <p className="home-about-body">
              I am a <b className="purple">Full Stack developer </b> who
              specializes in <b className="purple">frontend</b> development, who
              likes to craft solid and scalable frontend products with great
              user experience.
              <br />
              <br />
              I wield the power of{" "}
              <b className="purple">
                Typescript, React.js, Java, Css, Git, Jest
              </b>{" "}
              and more with ease. I approach my work with a relaxed and natural
              style, always striving for excellence.
              <br />
              <br />I am passionate about <b className="purple">optimization and problem solving. </b>
              {/* projects on GitHub one of them have become
              <i>
                <b className="purple"> trending globally repository</b>.
              </i> */}
              &nbsp;I take pride in delivering simple (precise) solutions and my exceptional skill is to quickly pick up new tech/environment.
              <br />
              <br />
              When I'm not coding, you can find me at the beach&nbsp;
              <i>
                <b className="purple">or traveling the
                world</b> in search of new adventures. Or, if the weather isn't
                cooperating, you might find me curled up on the couch listening to
                songs or<b className="purple"> watching movies</b>.
              </i>
              <br />
              {/* <br />I have also developed my own{" "}
              <b className="purple">npm package</b> for a minimalist routing
              solution for React. This package has gained popularity, receiving
              429 downloads in its first 5 days. Check the package here:{" "} */}
              {/* <a
                href="https://www.npmjs.com/package/tiger-router"
                target="_blank"
                rel="noreferrer"
                style={{ color: "black", textDecoration: "none" }}
                className="purple"
              > */}
                {/* tiger-router */}
              {/* </a> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <br />
          <br />
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hbodgal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/harsh-bodgal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
