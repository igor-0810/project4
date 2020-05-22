import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "./Context/userContext";
import MainNav from "./Components/MainNav";
import Footer from './Components/Footer'
import Calendar from './Components/Calendar';
import Homepage from './Components/Homepage/Hompage';
import SpaceBlog from './Components/SpaceBlog/SpaceBlog';
import Academies from "./Components/Academies";
import EventSpace from "./Components/EventSpace"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Provider>
            <MainNav />
            <Route path="/" exact component={Homepage} />
            <Route path="/space-blog" component={SpaceBlog}/>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/academies" component={Academies}/>
            <Route path="/event-space" component={EventSpace}/>
            <Footer/>
          </Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
