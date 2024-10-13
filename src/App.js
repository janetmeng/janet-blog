import Navbar from './Navbar';
import Home from './Home'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './Projects';
import Hobbies from './Hobbies';
import Contact from './Contact';


function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/"> 
              <Home />
            </Route>
            <Route path="/projects"> 
              <Projects />
            </Route>
            <Route exact path="/hobbies">
              <Hobbies /> 
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
