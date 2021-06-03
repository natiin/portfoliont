import node from "../images/logos/node.png";
import mongoDB from "../images/logos/mongoDB.png";
import express from "../images/logos/express.png";
import mongoose from "../images/logos/mongoose.png";
import bootstrap from "../images/logos/bootstrap-5-1.svg";
import sass from "../images/logos/sass.png";
import shop from "../images/projects-imgs/shop.gif";
import htmlcssjs from "../images/logos/htmlcssjs.png";
import calculator from "../images/projects-imgs/calc.gif";
import todolist from "../images/projects-imgs/todolist.gif";
import materialUi from "../images/logos/materialui.svg";
import reactLogo from "../logo.svg";
import kanban from "../images/projects-imgs/kanban.gif";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects-container no-display animate__animated animate__fadeIn">
      <div className="shop">
        <div className="description">
          <h1 className="project-name">scentLand</h1>
          <hr />
          <p>Technologies</p>
          <div className="imgs-tech-container">
            <img src={node} className="imgs-tech-grid" alt="NodeJS" />
            <img src={express} className="imgs-tech-grid" alt="Express" />
            <img src={mongoDB} className="imgs-tech-grid" alt="mongoDB" />
            <img src={mongoose} className="imgs-tech-grid" alt="mongoose" />
            <img src={bootstrap} className="imgs-tech-grid" alt="bootstrap" />
            <img src={sass} className="imgs-tech-grid" alt="sass" />
          </div>
          <p>I've created a very basic online shop with perfumes.The biggest challenge that I encountered while working on this project was backend. I've learned how to build a server and how to store data in the database.</p>
          <p>
            Any user is able to store products in the cart.A registered user is able to leave reviews and save products in the cart. Admin can add and remove products as well as change their price.
            <br />
            <strong>login: admin password: admin</strong>
          </p>
        </div>
        <div className="img-project-container">
          <img className="project-img" src={shop} alt="shop project" />
          <div className="project-links">
            <a href="https://scentland.herokuapp.com/" className="btn-link">
              go to
            </a>
            <a href="https://github.com/natiin/scentLand" className="btn-link">
              code
            </a>
          </div>
        </div>
      </div>
      <div className="kanban">
        <div className="description">
          <h1 className="project-name">Kanban</h1>
          <hr />
          <p>Technologies</p>
          <div className="imgs-tech-container">
            <img src={materialUi} className="imgs-tech-grid" alt="materialUI" />
            <img src={reactLogo} className="imgs-tech-grid" alt="react logo" />
          </div>

          <p>Kanban App created with React and Material UI</p>
          <p>App is using local storage. I've used beautiful-dnd library for the drag and drop functionality.</p>
        </div>
        <div className="img-project-container">
          <img className="project-img" src={kanban} alt="project kanban" />
          <div className="project-links">
            <a href="https://natiin.github.io/kanban/" className="btn-link">
              go to
            </a>
            <a href="https://github.com/natiin/kanban/" className="btn-link">
              code
            </a>
          </div>
        </div>
      </div>
      <div className="calculator">
        <div className="description">
          <h1 className="project-name">Calculator</h1>
          <hr />
          <p>Technologies</p>
          <img src={htmlcssjs} className="imgs-tech" alt="html css js" />
          <p>This was my very first project. While working on this project I've learned that I have to consider every possible situation the user may encounter. The calculator performs calculations following BIDMAS rules.</p>
        </div>
        <div className="img-project-container">
          <img className="project-img" src={calculator} alt="project calculator" />
          <div className="project-links">
            <a href="https://natiin.github.io/calculator/" className="btn-link">
              go to
            </a>
            <a href="https://github.com/natiin/calculator" className="btn-link">
              code
            </a>
          </div>
        </div>
      </div>
      <div className="to-do-list">
        <div className="description">
          <h1 className="project-name">To Do list</h1>
          <hr />
          <p>Technologies</p>
          <img src={htmlcssjs} className="imgs-tech" alt="html css js" />
          <p>A simple to do list. User can drag and drop each task and check as done.</p>
        </div>
        <div className="img-project-container">
          <img className="project-img" src={todolist} alt="project todo list" />
          <div className="project-links">
            <a href="https://natiin.github.io/todolist/" className="btn-link">
              go to
            </a>
            <a href="https://github.com/natiin/todolist" className="btn-link">
              code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
