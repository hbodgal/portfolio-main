import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>I am naturally inclined to take <span className="purple"> initiatives and embrace challenges </span>
            that others might shy away from. I find excitement in trying new things
            and <span className="purple">pushing boundaries</span>. I enjoy producing work that I can proudly show off.{" "}
            <br /><br />
            My <span className="purple">confidence</span> in expressing opinions is coupled with a genuine
            openness to suggestions and alternative viewpoints. I
            embrace the exchange of ideas as a pathway to growth.
            <br /><br />
            I am originally from
            <span className="purple"> India </span>
            currently living in
            <span className="purple"> Fullerton, CA</span>.
            My latest
            <span className="purple"> education</span> is in
            <span className="purple"> Computer Science</span> from California
            State University Fullerton. I have{" "}
            <span className="purple"> four years of experience</span> creating
            end to end features from concept to deployment. Leveraging my
            experience, I have taught{" "}
            <span className="purple">Web Backend</span> to Senior year students
            at CSUF using Python, for a year.
            <br /><br />
            When I'm not busy scribbling code, I keep things interesting by
            either indulging in movies or exploring cusines
            through dining out or whipping up something exciting in my own
            kitchen.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
