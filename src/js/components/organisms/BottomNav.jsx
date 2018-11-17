import React from "react";
import styles from "./scss/BottomNav.scss";

import { withRouter } from "react-router";
import BottomNavActions from "../molecules/BottmNavAction";

@withRouter
class BottomNav extends React.Component {
  render() {
    if (this.props.array.length === 0) return null;
    return (
      <div className={styles.root}>
        <BottomNavActions array={this.props.array} />
      </div>
    );
  }
}

export default BottomNav;
