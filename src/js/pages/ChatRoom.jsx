import React from "react";
import { Grid } from "@material-ui/core";

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
class RoomContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Grid container spacing={16} justify="center">
          <Grid item xs={12}>
            test
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default RoomContent;
