import React from "react";
import styles from "./scss/MouseEvent.scss";
import PropTypes from "prop-types";

class MouseEvent extends React.Component {
  constructor(props) {
    super(props);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.event = false;
    this.state = { single: true };
  }
  onMouseOver() {
    this.event = true;
    setTimeout(() => {
      if (this.event && this.state.single) {
        this.props.onFunction();
        if (this.props.onSingle) this.setState({ single: false });
      }
    }, this.props.timer);
  }
  onMouseOut() {
    this.event = false;
  }

  render() {
    const { alpha } = this.props;
    const button = alpha ? styles.hide_button : styles.show_button;
    return (
      <div
        className={button}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        {this.props.children}
      </div>
    );
  }
}

MouseEvent.propTypes = {
  onFunction: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
  alpha: PropTypes.bool,
  single: PropTypes.bool
};

export default MouseEvent;
