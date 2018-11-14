import React from "react";

import { withRouter } from "react-router";
import BottomNavActions from "../molecules/BottmNavAction";

@withRouter
class BottomNav extends React.Component {
  constructor(props) {
    super(props);
    this.createToArray = this.createToArray.bind(this);
  }
  createToArray() {
    const { history } = this.props;
    return [
      {
        name: "TOP",
        glid: 3,
        func: () => {
          history.push("/");
        },
        timer: 500
      },
      {
        name: "TUTORIAL",
        glid: 3,
        func: () => {
          history.push("/tutorial");
        },
        timer: 500
      }
    ];
  }
  render() {
    return <BottomNavActions array={this.createToArray()} />;
  }
}

export default BottomNav;
