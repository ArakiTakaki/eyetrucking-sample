import React from "react";

import MouseEvent from "~/components/atoms/MouseEvent";

import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});
const mapStateToProps = state => ({ store: state });

@withRouter
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class RoomContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <MouseEvent
          timer={1000}
          onFunction={() => {
            this.props.history.push("/");
          }}
        />
      </div>
    );
  }
}

export default RoomContent;
