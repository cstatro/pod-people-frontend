import React from "react";
import "./App.css";
import NavBar from "./Navbar/NavBar";
import { Route, Switch, withRouter } from "react-router-dom";
import Browse from "./containers/Browse";
import Home from "./containers/Home";
import Lists from "./containers/Lists";
import PodCastShow from "./containers/PodCastShow";
import { connect } from "react-redux";
import { mapModalStateToProps } from "./redux/actions/mapStateToProps/modalState";
import Modal from "./containers/Modal";

function App(props) {
  const { active, episode } = props;
  return (
    <div className="App">
      <NavBar />
      <div className="main-area">
        {active ? <Modal {...episode} /> : null}
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
        </Switch>
      </div>
    </div>
  );
}

export default connect(mapModalStateToProps)(withRouter(App));
