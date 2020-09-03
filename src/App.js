import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="content">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route exact path="/home" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
