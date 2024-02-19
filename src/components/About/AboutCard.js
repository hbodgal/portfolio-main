import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Harsh </span>
            originally from
            <span className="purple"> India </span>
            currently living in
            <span className="purple"> Fullerton, CA </span>.
            <br />
            <br />
            When I'm not busy scribbling code, I like to keep things interesting
            by indulging in IMDB top rated movies or series. I also like to meet new people and explore cusines through dining out or whipping up something exciting in my own kitchen. 
          </p>
          <h3 style={{ paddingBottom: "20px", paddingTop: "20px" }}>
            More about <strong className="purple">Me </strong> 👀
          </h3>
          <p style={{ textAlign: "justify" }}>
            I am creative person who likes to keep on creating something new. I feel amazing when someone 
            somewhere is using a feature which I created and optimized with my intelligence and skills. (Let me Flaunt my skills!)
            I find myself drawn to technology and coding.<br/><br/>
            
            My latest
            <span className="purple"> education</span> is in
            <span className="purple"> Computer Science</span> from California State University Fullerton. 
            I have gained<span className="purple"> four years of experience</span> creating end to end features from concept to deployment.
            And I have taught bunch of Senior year kids at CSUF, C++ and Web backend using Python for a year. 
            
            {/* Stack Web Development <span className="purple"> Bootcamp</span>.
            After graduate, I have gained
            <span className="purple"> one and a half years </span>
            of experience working in a company in Stockholm, Sweden as a
            Frontend Developer. When I'm not typing away at my computer, you can
            find me flexing my unit testing muscles with Jest and Vitest, and
            slowly but surely, I'm becoming a TypeScript lover! (Well, I'm
            getting slowely there...) You can find more of my work on my GitHub
            profile. */}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
