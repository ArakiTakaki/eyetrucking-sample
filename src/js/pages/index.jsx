import React from "react";
import { Typography, Grid, Card } from "@material-ui/core";
import MouseEvent from "~/components/atoms/MouseEvent";
import BottomNav from "~/components/organisms/BottomNav";

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
class Index extends React.Component {
  render() {
    const { name } = this.props.store;
    return (
      <div>
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Typography variant="h2" align="center">
              ココを教え隊！
            </Typography>
          </Grid>
          <BottomNav />
        </Grid>
      </div>
    );
  }
}

export default Index;
