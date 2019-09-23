import React from "react";
import "./App.css";
import NavBar from "./Navbar/NavBar";
import { Route, Switch, withRouter } from "react-router-dom";
import Browse from "./containers/Browse";
import Home from "./containers/Home";
import Lists from "./containers/Lists";
import PodCastShow from "./containers/PodCastShow";
import { connect } from "react-redux";
import { mapAppStateToProps } from "./redux/actions/mapStateToProps/modalState";
import Modal from "./containers/Modal";
import Login from "./containers/Login";

function App(props) {
  const { active, episode, loggedIn } = props;
  return (
    <div className="App">
      <NavBar />
      <div className="main-area">
        {active ? <Modal {...episode} user={loggedIn} /> : null}
        <Switch>
          <Route path={"/home"} render={() => <Home />} />
          <Route path={"/browse"} render={() => <Browse />} />
          <Route path={"/lists"} render={() => <Lists />} />
          <Route
            path={"/podcast/:id"}
            render={props => {
              const rss = props.history.location.rss;
              return <PodCastShow rss={rss} />;
            }}
          />
          <Route path={"/"} render={() => <Login />} />
        </Switch>
      </div>
    </div>
  );
}

export default connect(mapAppStateToProps)(withRouter(App));
