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
            {/* <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1> */}
            {/* <br /> */}
            {/* <br /> */}
                          {/* Well, that's just my name! I am quite the opposite. Ironically, my name means <b className="purple">Happiness</b> in Sanskrit!<br /><br /> */}
            {/* Hi I am <b className="purple">Harsh</b>. That's just my name! Ironicolly my name means Hapiness in Sanskrit!<br /><br /> */}
            {/* I wield the power of{" "}
              <b className="purple">
                Typescript, Next.js, React.js, Express, Css, Git, Jest
              </b>{" "}
              and more with ease. */}
            <p className="home-about-body">
              Hi! I'm <span className="purple">Harsh</span>, a <span className="purple">Full Stack sofware developer</span>, who
              likes to write code and craft scalable products that offers great user
              experience. 
              <br />
              <br />
              {/* I approach my work with a relaxed and natural style while always
              striving for <span class="purple">excellence</span>.
              I take pride in delivering simple (precise) solutions that solves real problems. */}
              I love being <span class="purple">creative</span> and adding that extra flair to every
              task. <br />
              <br />It's a great feeling when someone out there is using a
              feature that I've put together, using my smarts and skills.  {/* Tech and
              coding just pull me in. */}
               I find excitement in trying new things
            and <span className="purple">pushing boundaries</span> and produce work that I can proudly show off.{" "}
              <br /><br />
              Thanks for stopping by! Be sure to check out my cool <a className="project-link" href="/projects"><span className="purple">projects</span></a>.
              {/* When I'm not coding, you can find me at the beach&nbsp;
              <i>
                <b className="purple">or traveling thI love being creative and adding that extra flair to every task. It's such a great feeling when someone out there is using a feature I put together, using my smarts and skills. Let me boast a bit about my skills! Tech and coding just pull me in.
e
                world</b> in search of new adventures. Or, if the weather isn't
                cooperating, you might find me curled up on the couch listening to
                songs or<b className="purple"> watching movies</b>.
              </i> */}
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
