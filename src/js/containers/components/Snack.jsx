import React from "react";
import { Snackbar, Fade } from "@material-ui/core";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});
const mapStateToProps = state => ({ store: state });

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class Sneack extends React.Component {
  render() {
    const { isMessageSnackBar, strMessageSnackBar } = this.props.store;
    return (
      <div>
        <Snackbar
          open={isMessageSnackBar}
          TransitionComponent={Fade}
          message={strMessageSnackBar}
        />
      </div>
    );
  }
}

export default Sneack;
