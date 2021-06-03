import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-container">
        <Switch>
          <Route exact path="/" render={Home}></Route>
          <Route exact path="/about" render={About}></Route>
          <Route exact path="/projects" render={Projects}></Route>
          <Route exact path="/contact" render={Contact}></Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
