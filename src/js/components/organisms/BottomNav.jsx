import React from "react";

import { withRouter } from "react-router";
import BottomNavActions from "../molecules/BottmNavAction";

@withRouter
class BottomNav extends React.Component {
  render() {
    console.log(this.props);
    if (this.props.array.length === 0) return null;
    return <BottomNavActions array={this.props.array} />;
  }
}

export default BottomNav;
