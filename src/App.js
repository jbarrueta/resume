import Particles from "react-particles-js";
import Navigation from "./Components/Navigation/Navigation";
import "./App.css";
import "tachyons";
import { Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Resume from "./Pages/Resume/Resume";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Route>
      <div>
        <Particles className="particles" />
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </div>
    </Route>
  );
}

export default App;
