import React from "react";
import { hot } from "react-hot-loader";
import Index from "../pages/index";
import Progress from "./components/Progress";
import Snack from "./components/Snack";
import { Switch, Route } from "react-router-dom";
import Tutorial from "~/pages/Tutorial";
import Result from "~/pages/Result";
import SelectStage from "~/pages/SelectStage";
import SelectedStage from "~/pages/SelectedStage";

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
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/tutorial" component={Tutorial} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/select_stage" component={SelectStage} />
          <Route exact path="/selected_stage/:id" component={SelectedStage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Root;
