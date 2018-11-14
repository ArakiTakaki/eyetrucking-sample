import React from "react";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import styles from "./scss/progress.scss";

const mapStateToProps = state => ({ progress: state.progress });

@connect(
  mapStateToProps,
  null
)
class progress extends React.Component {
  render() {
    if (!this.props.progress) return null;
    return (
      <div className={styles.root}>
        <div className={styles.base}>
          <CircularProgress size={90} />
        </div>
      </div>
    );
  }
}

export default progress;
