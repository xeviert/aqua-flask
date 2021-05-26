import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from './Components/NavBar'
import About from './Components/About'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Cartbar from './Components/Cartbar'


import './App.css';

function App() {
  return (
    <>
          <NavBar />
          <Cartbar />
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/" exact component={Home} />
            </Switch>
          <Footer />
    </>
  );
}

export default App;
