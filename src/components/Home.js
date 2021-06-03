import { Link } from "react-router-dom";
import ImgLaptop from "../images/cov.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="welcome">
      <p className="welcome-msg animate__animated animate__fadeInDownBig">
        Hi! <br />
        My name is <span className="full-name">Natalia Targowska</span>
        <br />
        I'm an anspiring web developer!
      </p>
      <p className="btn-container animate__animated animate__fadeInDownBig">
        <Link to="/projects" className="btn">
          more
        </Link>
      </p>

      <img src={ImgLaptop} className="laptop-img" alt="laptop" />
      <p className="credit">
        Photo by <a href="https://unsplash.com/@joshuaryanphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joshua Reddekopp</a> on <a href="/collections/12072069/tech?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
    </div>
  );
}

export default Home;
