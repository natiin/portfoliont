import { Link } from "react-router-dom";
import "../styles/About.css";

function About() {
  return (
    <div className="about-me no-display animate__animated animate__fadeIn">
      <p className="about-me-msg">
        When I was 17 I built my first static website with design templates for personal blogs, which were very popular at the time. Unfortunately I abandoned that interest. About 1,5 year ago I rediscovered the world of web development. Since then, I've been learning by myself and with the help of online courses. I'm aware that I have a lot to learn, but I'm looking forward to it!
        <br />
        <br />
        I'm a beginner web developer who is looking for a first job in tech. Please take a look at my
        <Link to="/projects" className="about-me-projects">
          projects!
        </Link>
      </p>
    </div>
  );
}

export default About;
