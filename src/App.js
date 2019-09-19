import React from "react";
import "./App.css";
import NavBar from "./Navbar/NavBar";
import { Route, Switch, withRouter } from "react-router-dom";
import Browse from "./containers/Browse";
import Home from "./containers/Home";
import Lists from "./containers/Lists";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-area">
        <Switch>
          <Route path={"/home"} render={() => <Home />} />
          <Route path={"/browse"} render={() => <Browse />} />
          <Route path={"/lists"} render={() => <Lists />} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
