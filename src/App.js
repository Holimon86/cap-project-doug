import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import Home from "./components/home.component";
import Attractions from "./components/attractions.component";
import addAttractions from "./components/addAttractions.component";
import About from "./components/about.component";
import Contact from "./components/contactUs.component"

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      {/* change route names */}
      <Route path="/" exact component={Home} />
      <Route path="/attractions" component={Attractions} />
      <Route path="/addattractions" component={addAttractions} />
      <Route path="/about" component={About} />
      <Route path="/contactus" component={Contact} />
    </Router>
  );
}

export default App;