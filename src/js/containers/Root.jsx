import React from "react";
import { hot } from "react-hot-loader";
import Index from "../pages/index";
import Progress from "./components/Progress";
import Snack from "./components/Snack";
import { Switch, Route } from "react-router-dom";
import ChatRoom from "~/pages/ChatRoom";

@hot(module)
class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Progress />
        <Snack />
        <Index />
        <Switch>
          <Route exact path="/" component={ChatRoom} />
          <Route exact path="/tutorial" component={ChatRoom} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Root;
