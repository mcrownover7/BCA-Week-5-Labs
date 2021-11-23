import "./App.css";
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from './components/Nav'
import { Switch, Route } from "react-router-dom";
//BrowserRouter surrounding everything in index.js
function App() {
  return (
    // <Header />
    // <Nav />
    <div>
      <div>
        <Nav />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path='*' render={(props) => {
          return<h1>404 Page Not Found</h1>
        }} />
      </Switch>
    </div>
  );
}

export default App;
